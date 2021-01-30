import { Injectable, Inject, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { debounce, debounceTime, first, tap } from 'rxjs/operators';
import { Request, Response } from 'express'
import { Logger } from 'log4js';
import { LOG4JS_TOKEN } from './tokens/log4js.token';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(@Inject(LOG4JS_TOKEN) protected logger: Logger){
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request: Request = ctx.getRequest();
    const response: Response = ctx.getResponse()

    const now = Date.now()
    
    return next
      .handle()
      .pipe(
        first(),
        tap((data) => {
          this.printLog(now, request, response, data)
          return data
        }),
      )
  }

  printLog(time: number, req: Request, res: Response, body: string | { [data: string] : any }){
    const logObj = JSON.stringify(this.createLog(time, req, res,body), null, 2)
    
    // this.logger.info(logObj)
  }

  createLog(time: number, req: Request, res: Response, body: string | { [data: string] : any }){
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const method = req.method;
    const path = req.baseUrl;
    const duration = Date.now() - time;

    return {
      elapsedTime: `${duration}ms`,
      hostname: req.headers.host,
      level: 'INFO',
      method,
      path,
      phase: process.env.NODE_ENV,
      reqBody: req.body,
      reqHeaders: req.headers,
      resBody: body,
      resHeaders: res.getHeaders(),
      status: res.statusCode
    }
  }
}
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { Logger } from 'log4js';
import { LOG4JS_TOKEN } from './tokens/log4js.token';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  constructor(@Inject(LOG4JS_TOKEN) protected logger: Logger){
  }
  use(req: Request, res: Response, next: () => void) {

    const methodHandler = this.methodSelector(req)

    methodHandler.call(this, req)

    next();
  }

  private GetMethod(req: Request){
    this.logger.info(`
      METHOD: \t${req.method}
      URL: \t${req.baseUrl}${req.url}
      QUERY: \t${JSON.stringify(req.query)}
    `)
  }

  private PostMethod(req: Request){
    this.logger.info(`
      METHOD: \t${req.method}
      URL: \t${req.baseUrl}${req.url}
      PARAMS: \t${JSON.stringify(req.params)}
      QUERY: \t${JSON.stringify(req.query)},
      BODY: \t${JSON.stringify(req.body)}
    `)
  }

  private PutMethod(req: Request){
    this.logger.info(`
      METHOD: \t${req.method}
      URL: \t${req.baseUrl}${req.url}
      PARAMS: \t${JSON.stringify(req.query)}
    `)
  }

  private DeleteMethod(req: Request){
    this.logger.info(`
      METHOD: \t${req.method}
      URL: \t${req.baseUrl}${req.url}
      PARAMS: \t${JSON.stringify(req.params)}
    `)
  }
  
  private methodSelector(req: Request): (req: Request) => void {
    console.log(req.method)
    const method = req.method 
    return {
      'GET': this.GetMethod,
      'POST': this.PostMethod,
      'PUT': this.PutMethod,
      'DELETE': this.DeleteMethod
    }[method]
  }
}

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LOG4JS_TOKEN } from '@tokens/log4js.token';
import { LogMiddleware } from './log.middleware';
import { LoggingInterceptor } from './logging.middleware';
import { LogProvider } from './providers/log4js.provider';
import { LoggerProvider } from './providers/logger.provider';

@Module({
    providers:[
        // LoggerProvider,
        // LogMiddleware,
        LogProvider,
        LoggerProvider
    ],
    exports: [
        LOG4JS_TOKEN,
        LoggerProvider,
        LogProvider
    ]
})
export class LoggerModule {}

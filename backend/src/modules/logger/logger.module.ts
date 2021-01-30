import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogMiddleware } from './log.middleware';
import { LoggingInterceptor } from './logging.middleware';
import { LogProvider } from './providers/log4js.provider';
import { LoggerProvider } from './providers/logger.provider';

@Module({
    providers:[
        LogMiddleware,
        LogProvider,
        LoggerProvider
    ],
    exports: [
        LogProvider
    ]
})
export class LoggerModule {}

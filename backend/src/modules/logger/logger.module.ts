import { Module } from '@nestjs/common';
import { LogMiddleware } from './log.middleware';
import { LogProvider } from './providers/log4js.provider';
import { LoggerProvider } from './providers/logger.provider';

@Module({
    providers:[
        LogMiddleware,
        LogProvider,
        LoggerProvider,
    ],
    exports: [
        LogProvider
    ]
})
export class LoggerModule {}

import { Module } from '@nestjs/common';
import { EnviromentProvider } from './providers/env.provider';
import { LoggerProvider } from '../logger/providers/logger.provider';

@Module({
    providers:[
        EnviromentProvider,
        LoggerProvider
    ],
    exports: [
        EnviromentProvider,
        LoggerProvider
    ]
})
export class ConfigurationModule {}

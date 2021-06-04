import { Module } from '@nestjs/common';
import { EnviromentProvider } from './providers/env.provider';
import { LoggerProvider } from '../logger/providers/logger.provider';
import { LoggerModule } from '../logger/logger.module';

@Module({
    imports: [
        // LoggerModule
    ],
    providers:[
        EnviromentProvider,
        // LoggerProvider
    ],
    exports: [
        // LoggerModule,
        // LoggerProvider,
        EnviromentProvider,
        // LoggerProvider
    ]
})
export class ConfigurationModule {}

import { Module } from '@nestjs/common';
import { EnviromentProvider } from 'src/modules/configuration/providers/env.provider';
import { MongoProvider } from './provider/mongo.provider'

@Module({
    providers:[
        EnviromentProvider,
        MongoProvider,
    ],
    exports: [
        MongoProvider,
        EnviromentProvider
    ]
})
export class MongoModule {}

import { Module } from '@nestjs/common';
import { EnviromentProvider } from 'src/modules/configuration/providers/env.provider';
import { MongoProvider } from './provider/mongo.provider'
// import { QuestionRepositoryProvider } from './repositories/question-repository.provider';
import { RoomsRepositoryProvider } from './repositories/rooms-repository.provider';

@Module({
    providers:[
        EnviromentProvider,
        MongoProvider,
        // QuestionRepositoryProvider,
        RoomsRepositoryProvider
    ],
    exports: [
        MongoProvider,
        EnviromentProvider,
        // QuestionRepositoryProvider,
        RoomsRepositoryProvider
    ]
})
export class MongoModule {}

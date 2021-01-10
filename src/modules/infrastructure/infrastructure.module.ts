import { Module } from '@nestjs/common';
import { MongoModule } from './database/mongo/mongo.module';

@Module({
    imports:[
        MongoModule
    ],
    exports: [
        MongoModule
    ]
})
export class InfrastructureModule {}

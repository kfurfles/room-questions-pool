import { TypeConfig } from '@interfaces/IEnv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { MongooseConfigModule } from './modules/infrastructure/database/mongoose/mongoose.config.module';
import { LoggerModule } from './modules/logger/logger.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { UserModule } from './modules/user/user.module';

const {
  DB_MONGO_USER: USER,
  DB_MONGO_PASSWORD: PASSWORD,
  DB_MONGO_DB: DB,
  DB_MONGO_HOST: HOST
} = process.env as unknown as Omit < TypeConfig, 'LOGGER' >

MongooseModule.forRoot(`mongodb://${USER}:${PASSWORD}@${HOST}/${DB}?authSource=dbWithUserCredentials`)


@Module({
  imports: [
    MongooseConfigModule(),
    // MongooseModule.forRoot(`mongodb://${USER}:${PASSWORD}@${HOST}/${DB}`),
    QuestionsModule,
    RoomsModule,
    ConfigurationModule,
    LoggerModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}

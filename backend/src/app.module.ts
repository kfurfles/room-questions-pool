import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { LogMiddleware } from './modules/logger/log.middleware';
import { LoggerModule } from './modules/logger/logger.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { RoomsModule } from './modules/rooms/rooms.module';

@Module({
  imports: [
    QuestionsModule,
    RoomsModule,
    ConfigurationModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}

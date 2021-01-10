import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { LogMiddleware } from './modules/logger/log.middleware';
import { LoggerModule } from './modules/logger/logger.module';
import { QuestionsModule } from './modules/questions/questions.module';

@Module({
  imports: [
    QuestionsModule,
    ConfigurationModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
  
}

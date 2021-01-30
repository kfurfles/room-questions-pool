import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { LoggerModule } from './modules/logger/logger.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
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

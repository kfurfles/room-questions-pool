import { Module } from '@nestjs/common';
import { QuestionsService } from './services/questions.service';
import { QuestionsController } from './controllers/questions.controller';
import { MongoModule } from '../infrastructure/database/mongo/mongo.module';
import { UpdateRoomsService } from '../rooms/services/update-room.service';
import { GetRoomsService } from '../rooms/services/get-room.service';
import { RoomsSocketGateway } from './websockets/rooms-socket.gateway';
@Module({
  imports: [MongoModule],
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    UpdateRoomsService,
    GetRoomsService,
    RoomsSocketGateway
  ],
})
export class QuestionsModule {}

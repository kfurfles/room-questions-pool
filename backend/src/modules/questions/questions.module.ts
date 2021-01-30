import { Module } from '@nestjs/common';
import { QuestionsService } from './services/questions.service';
import { QuestionsController } from './controllers/questions.controller';
import { UpdateRoomsService } from '../rooms/services/update-room.service';
import { GetRoomsService } from '../rooms/services/get-room.service';
import { RoomsSocketGateway } from './websockets/rooms-socket.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from '../rooms/entities/room.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),

  ],
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    UpdateRoomsService,
    GetRoomsService,
    RoomsSocketGateway
  ],
})
export class QuestionsModule {}

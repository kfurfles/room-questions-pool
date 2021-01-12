import { Module } from '@nestjs/common';
import { RoomsService } from './services/rooms.service';
import { RoomsController } from './controllers/rooms.controller';
import { MongoModule } from '../infrastructure/database/mongo/mongo.module';
import { UpdateRoomsService } from './services/update-room.service';
import { GetRoomsService } from './services/get-room.service';

@Module({
  imports:[MongoModule],
  controllers: [RoomsController],
  providers: [
    UpdateRoomsService,
    GetRoomsService,
    RoomsService
  ]
})
export class RoomsModule {}

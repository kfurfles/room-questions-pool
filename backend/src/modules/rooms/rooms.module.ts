import { Module } from '@nestjs/common';
import { RoomsService } from './services/rooms.service';
import { RoomsController } from './controllers/rooms.controller';
import { MongoModule } from '../infrastructure/database/mongo/mongo.module';
import { UpdateRoomsService } from './services/update-room.service';
import { GetRoomsService } from './services/get-room.service';
import { CreateRoomsService } from './services/create-room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/room.entity';
import { RoomsRepository } from './repositories/rooms.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [RoomsController],
  providers: [
    CreateRoomsService,
    UpdateRoomsService,
    GetRoomsService,
    RoomsService,
    RoomsRepository,
    UserRepository
  ]
})
export class RoomsModule {}

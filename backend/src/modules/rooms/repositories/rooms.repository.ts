import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Room, RoomDocument } from '../entities/room.entity';

@Injectable()
export class RoomsRepository {

  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<RoomDocument>
  ){
    
  }

  async create(createRoomDto: CreateRoomDto) {
    const createdUser = new this.roomModel(createRoomDto)
 
    return createdUser.save()
  }

  async findAll() {

    return this.roomModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    return {}
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

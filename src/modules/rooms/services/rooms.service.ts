import { Inject, Injectable } from '@nestjs/common';
import { clearObject } from 'src/modules/helpers/clear-objects';
import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { MongoRepository } from 'typeorm';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Room } from '../entities/room.entity';
import { GetRoomsService } from './get-room.service';
import { UpdateRoomsService } from './update-room.service';

@Injectable()
export class RoomsService {
  constructor(
    @Inject(ROOMS_REPOSITORY) protected repository: MongoRepository<Room>,
    protected getRoomsService: GetRoomsService,
    protected updateRoomsService: UpdateRoomsService
  ){
    
  }

  async create(createRoomDto: CreateRoomDto) {
    const { name, questions, password } = createRoomDto

    const newRoom = new Room(name, questions, password)
    
    const savedRoom = await this.repository.save(newRoom)

    return savedRoom;
  }

  async findOne(id: string) {
    try {
      const roomID = ObjectID(id)
    
      const room = await this.repository.findOne({
        where:{
          _id: roomID
        }
      }, { transaction: true });

      if(!room) throw new Error('Room not found') 

      return room
      
    } catch (error) {
      throw new TypeError(error.message);
    }
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    try {
      const { name, password } = updateRoomDto
      
      const updatedRoom = await this.updateRoomsService.execute(id, { name, password })
      
      return updatedRoom    
    } catch (e) {
      throw new TypeError(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}

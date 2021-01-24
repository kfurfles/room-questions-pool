import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';
import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { MongoRepository } from 'typeorm';
import { Room } from '../entities/room.entity';

@Injectable({ scope: Scope.REQUEST })
export class GetRoomsService  implements IService{
  constructor(@Inject(ROOMS_REPOSITORY) protected repository: MongoRepository<Room>){
    
  }

  async execute(id: string): Promise<Room> {
    try {
      const roomID = ObjectID(id)
  
      const room = await this.repository.findOne({
        where:{
          _id: roomID
        }
      }, { transaction: true });

      if(!room) throw new Error('Room not found')

      return room
    
    } catch (e) {
      throw new TypeError(e.message);
    }
  }
}

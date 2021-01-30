import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';
import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { MongoRepository } from 'typeorm';
import { Room } from '../entities/room.entity';

@Injectable({ scope: Scope.REQUEST })
export class UpdateRoomsService implements IService{
  // constructor(@Inject(ROOMS_REPOSITORY) protected repository: MongoRepository<Room>){
    
  // }

  async execute(id: string, updateRoomDto: Partial<Room>): Promise<Room> {
    // try {
    //   const updateroom = clearObject({ ...updateRoomDto })
    //   const roomID = ObjectID(id)     
      
    //   const { value } = await this.repository.findOneAndUpdate(
    //     { _id: roomID }, 
    //     {  $set: { ...updateroom } },
    //     {  returnOriginal: false  }
    //   );

    //   if(!value) throw new TypeError('Room not found')

    //   return value;
    
    // } catch (e) {
    //     if (e instanceof TypeError) {
    //         throw new TypeError(e.message);
    //     }

    //     throw new TypeError('The operation could not be completed');
    // }
    return {} as Room
  }
}

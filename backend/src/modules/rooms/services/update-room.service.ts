import { Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Room, RoomDocument } from '../entities/room.entity';
import { RoomsRepository } from '../repositories/rooms.repository';

@Injectable({ scope: Scope.REQUEST })
export class UpdateRoomsService implements IService{
  constructor(
    protected roomsRepository: RoomsRepository,
  ){
    
  }

  async execute(id: string, updateRoomDto: UpdateRoomDto): Promise<RoomDocument | any> {
    try {
      const updateroom = clearObject({ ...updateRoomDto })

      console.log({ updateroom });

      return this.roomsRepository.patch(id, updateroom)
    
    } catch (e) {
        if (e instanceof TypeError) {
            throw new TypeError(e.message);
        }

        throw new TypeError('The operation could not be completed');
    }
    // return {} as Room
  }
}

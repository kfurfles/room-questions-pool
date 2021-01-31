import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';

import { RoomDocument } from '../entities/room.entity';
import { RoomsRepository } from '../repositories/rooms.repository';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { CreateRoomDto } from '../dto/create-room.dto';
import { generate } from 'generate-password';

@Injectable({ scope: Scope.REQUEST })
export class CreateRoomsService  implements IService{

  constructor(
    protected roomsRepository: RoomsRepository,
    protected userRepository: UserRepository
  ){  }

  async execute(userId: string, createRoomDto: Partial<Omit<CreateRoomDto, 'userId'>>): Promise<RoomDocument> {
    
    const user = await this.userRepository.findOne(userId)

    if(!user) throw new TypeError('User not found')

    const { 
      name, 
      password =  generate({ length: 10, numbers: true})
    } = createRoomDto

    const createdRoom = await this.roomsRepository.create({ name, userId, password })

    return createdRoom
  }
}

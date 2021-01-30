import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';

// import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { User, UserDocument } from 'src/modules/user/entities/user.entity';
import { USER_REPOSITORY } from 'src/modules/user/tokens/user-repository.token';
import { MongoRepository, ObjectID } from 'typeorm';
import { Room, RoomDocument } from '../entities/room.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomsRepository } from '../repositories/rooms.repository';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { CreateRoomDto } from '../dto/create-room.dto';
import { generate } from 'generate-password';



@Injectable({ scope: Scope.REQUEST })
export class CreateRoomsService  implements IService{
  // constructor(
  //   @Inject(ROOMS_REPOSITORY) protected roomRepository: MongoRepository<Room>,
  //   @Inject(USER_REPOSITORY) protected userRepository: MongoRepository<User>,
  //   @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  // ){ }

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

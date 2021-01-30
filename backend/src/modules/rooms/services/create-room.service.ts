import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';

// import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { User, UserDocument } from 'src/modules/user/entities/user.entity';
import { USER_REPOSITORY } from 'src/modules/user/tokens/user-repository.token';
import { MongoRepository, ObjectID } from 'typeorm';
import { Room } from '../entities/room.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable({ scope: Scope.REQUEST })
export class CreateRoomsService  implements IService{
  constructor(
    @Inject(ROOMS_REPOSITORY) protected roomRepository: MongoRepository<Room>,
    // @Inject(USER_REPOSITORY) protected userRepository: MongoRepository<User>,
    // @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ){ }

  async execute(UserId: string, updateRoomDto: Partial<Room>): Promise<Room| unknown> {
    
    // const user = new User()
    // user._id = new ObjectID(UserId)
    // const { name, questions, password } = updateRoomDto
    // const userID = new ObjectID(UserId)    
    

    // const findedUser = await this.userRepository.find({  })

    // console.log(findedUser)

    // const newRoom = new Room(name, questions, password, userId)
    
    // const savedRoom = await this.repository.save(newRoom)

    // return savedRoom;
    return {}
  }
}

import { Inject, Injectable, Scope } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { clearObject } from 'src/modules/helpers/clear-objects';
import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from '../tokens/user-repository.token';

@Injectable({ scope: Scope.REQUEST })
export class UpdateUserService implements IService{
  constructor(@Inject(USER_REPOSITORY) protected repository: MongoRepository<User>){
    
  }

  async execute(id: string, updateUserDto: Partial<User>): Promise<User> {
    try {
      const updateUser = clearObject({ ...updateUserDto })
      console.log({ updateUser })
      const userID = ObjectID(id)     
      
      const { value } = await this.repository.findOneAndUpdate(
        { _id: userID }, 
        {  $set: { ...updateUser } },
        {  returnOriginal: false  }
      );

      if(!value) throw new TypeError('User not found')

      return value;
    
    } catch (e) {
      if (e instanceof TypeError) {
          throw new TypeError(e.message);
      }

      throw new TypeError('The operation could not be completed');
    }
  }
}

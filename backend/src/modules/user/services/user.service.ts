import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from '../tokens/user-repository.token';
import { UpdateUserService } from './update-user.service'

@Injectable()
export class UserService {

  constructor(
    @Inject(USER_REPOSITORY) protected repository: MongoRepository<User>,
    protected updateUserSerivce: UpdateUserService
  ){
    
  }

  async create(createUserDto: CreateUserDto) {

    const { firstName, lastName, email, password } = createUserDto

    const newUser = new User(firstName, lastName, email, password)
    
    const savedUser = await this.repository.save(newUser)

    return savedUser;
  }

  async findAll() {

    const users = await this.repository.find({});

    return users;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const { firstName, lastName, email } = updateUserDto
      
      const updatedUser = await this.updateUserSerivce.execute(id, { firstName, lastName, email })
      
      return updatedUser    
    } catch (e) {
      throw new TypeError(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repositories/user.repository';

import { UpdateUserService } from './update-user.service'

@Injectable()
export class UserService {

  constructor(
    protected userRepository: UserRepository,
    protected updateUserSerivce: UpdateUserService
  ){
    
  }

  async create(createUserDto: CreateUserDto) {

    return this.userRepository.create(createUserDto)
  }

  async findAll() {
    return this.userRepository.findAll()
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

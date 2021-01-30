import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User,UserDocument } from '../entities/user.entity';

@Injectable()
export class UserRepository {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ){
    
  }

  async create(createUserDto: CreateUserDto) {

    const createdUser = new this.userModel(createUserDto)
 
    return createdUser.save()
  }

  async findAll() {

    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec()

    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return {}
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

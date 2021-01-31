import { Inject, Injectable, Post } from '@nestjs/common';
import { MongoRepository, Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { Question } from '../entities/question.entity';
import { ROOMS_REPOSITORY } from 'src/modules/infrastructure/database/mongo/tokens/rooms-repository.token';
import { Room } from 'src/modules/rooms/entities/room.entity';
import { ObjectID } from 'src/modules/infrastructure/database/mongo/entities/ObjectId.entity';
import { UpdateRoomsService } from 'src/modules/rooms/services/update-room.service';
import { GetRoomsService } from 'src/modules/rooms/services/get-room.service';


@Injectable()
export class QuestionsService {
  constructor(
    protected getRoomsService: GetRoomsService,
    protected updateRoomsService: UpdateRoomsService
  ){
  }
  
  async create(createQuestionDto: CreateQuestionDto) {
    try {
      // const room = await this.getRoomsService.execute(createQuestionDto.roomId)   
  
      // const updatedQuestions = [ ...room.questions, new Question(createQuestionDto.name) ] 
      
      // return await this.updateRoomsService.execute(createQuestionDto.roomId, { questions: updatedQuestions })  
      // return await this.updateRoomsService.execute(createQuestionDto.roomId, { questions: updatedQuestions })  
    } catch (e) {
      throw new TypeError(e.message);
    }
  }

  async findAll() {
    // const newQuestion = new Question(`outro teste`)
    // const savedQuestion = await this.repository.save(newQuestion)

    return 'savedQuestion';
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}

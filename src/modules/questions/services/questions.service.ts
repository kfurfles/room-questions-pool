import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(@Inject('REPOSITORY') protected repository: Repository<Question>){
  }
  
  async create(createQuestionDto: CreateQuestionDto) {
    // const newQuestion = new Question(createQuestionDto.question)

    return { };
  }

  async findAll() {
    const newQuestion = new Question(`outro teste`)
    const savedQuestion = await this.repository.save(newQuestion)

    return savedQuestion;
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

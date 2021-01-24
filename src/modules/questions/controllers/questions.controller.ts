import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete 
} from '@nestjs/common';
import { QuestionsService } from '../services/questions.service';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { RoomsSocketGateway } from '../websockets/rooms-socket.gateway';
@Controller('questions')
export class QuestionsController {
  constructor(
    protected readonly roomsSocketGateway: RoomsSocketGateway,
    protected readonly questionsService: QuestionsService
  ) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      const result = await this.questionsService.create(createQuestionDto);
      const { _id, questions } = result
      this.roomsSocketGateway.newQuestion(_id.toString(), questions)
      
      return result
      
    } catch (error) {
      return { error: error.message }
    }
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}

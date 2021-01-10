import { Module } from '@nestjs/common';
import { QuestionsService } from './services/questions.service';
import { QuestionsController } from './controllers/questions.controller';
import { MongoModule } from '../infrastructure/database/mongo/mongo.module';
import { QuestionRepositoryProvider } from './provider/question-repository.provider';

@Module({
  imports: [
    MongoModule
  ],
  controllers: [
    QuestionsController
  ],
  providers: [
    QuestionRepositoryProvider,
    QuestionsService,
  ],
})
export class QuestionsModule {}

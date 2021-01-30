import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserRepositoryProvider } from './providers/user-repository.provider';
import { MongoModule } from '../infrastructure/database/mongo/mongo.module';
import { UpdateUserService } from './services/update-user.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [
    MongoModule,
    LoggerModule
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UpdateUserService,
    UserRepositoryProvider
  ]
})
export class UserModule {}

import { FactoryProvider } from "@nestjs/common";
import { MONGO_CONNECTION_TOKEN } from "src/modules/infrastructure/database/mongo/tokens/mongo-connection.token";
import { Connection, MongoRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { USER_REPOSITORY } from "../tokens/user-repository.token";


export const UserRepositoryProvider: FactoryProvider<MongoRepository<User>> = {
    provide: USER_REPOSITORY,
    useFactory: (config: Connection) => config.getMongoRepository(User),
    inject:[MONGO_CONNECTION_TOKEN]
};
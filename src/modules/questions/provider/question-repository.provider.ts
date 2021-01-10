import { FactoryProvider } from "@nestjs/common";
import { ENVIROMENT_TOKEN } from "@tokens/enviroment.token";
import { MONGO_CONNECTION_TOKEN } from "src/modules/infrastructure/database/mongo/tokens/mongo-connection.token";
import { Connection, getConnection } from "typeorm";
import { Question } from "../entities/question.entity";


export const QuestionRepositoryProvider: FactoryProvider = {
    provide: 'REPOSITORY',
    useFactory: (config: Connection) => {
        return config.getRepository(Question)
    },
    inject:[MONGO_CONNECTION_TOKEN]
};
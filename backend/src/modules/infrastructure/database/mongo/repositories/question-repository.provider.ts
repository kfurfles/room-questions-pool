// import { FactoryProvider } from "@nestjs/common";
// import { MONGO_CONNECTION_TOKEN } from "src/modules/infrastructure/database/mongo/tokens/mongo-connection.token";
// import { Connection, Repository } from "typeorm";
// import { Question } from "../../../../questions/entities/question.entity";
// import { QUESTION_REPOSITORY } from "../tokens/questions-repository.token";


// export const QuestionRepositoryProvider: FactoryProvider<Repository<Question>> = {
//     provide: QUESTION_REPOSITORY,
//     useFactory: (config: Connection) => config.getRepository(Question),
//     inject:[MONGO_CONNECTION_TOKEN]
// };
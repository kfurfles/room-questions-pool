import { FactoryProvider } from "@nestjs/common";
import { MONGO_CONNECTION_TOKEN } from "src/modules/infrastructure/database/mongo/tokens/mongo-connection.token";
import { Room } from "src/modules/rooms/entities/room.entity";
import { Connection, MongoRepository } from "typeorm";
import { ROOMS_REPOSITORY } from "../tokens/rooms-repository.token";


export const RoomsRepositoryProvider: FactoryProvider<MongoRepository<Room>> = {
    provide: ROOMS_REPOSITORY,
    useFactory: (config: Connection) => config.getMongoRepository(Room),
    inject:[MONGO_CONNECTION_TOKEN]
};
import { TypeConfig } from "@interfaces/IEnv"
import { ENVIROMENT_TOKEN } from "@tokens/enviroment.token";
import { join } from "path";
import { createConnection } from "typeorm";
import { MONGO_CONNECTION_TOKEN } from "../tokens/mongo-connection.token";

export const MongoProvider = {
    provide: MONGO_CONNECTION_TOKEN,
    useFactory: async (envConfig: TypeConfig) => {
        const {
            DB_MONGO_DB: DB_NAME,
            DB_MONGO_PASSWORD: PASSWORD,
            DB_MONGO_USER: USER,
            DB_MONGO_HOST: HOST
        } = envConfig

        const ENTITIES = join(__dirname,'..','..','..','..','..','**','*.entity{.ts,.js}')
        const connectionString = `mongodb://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?authSource=dbWithUserCredentials`
        console.log({ connectionString })


        return await createConnection({
            url: `mongodb://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?authSource=dbWithUserCredentials`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            type: 'mongodb',
            synchronize: true,
            logger: 'simple-console',
            entities: [
                ENTITIES
            ]
        })
    },
    inject: [ENVIROMENT_TOKEN]
}
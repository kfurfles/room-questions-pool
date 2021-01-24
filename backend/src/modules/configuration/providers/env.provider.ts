import { TypeConfig } from "@interfaces/IEnv";
import { ValueProvider } from "@nestjs/common";
import { ENVIROMENT_TOKEN } from "../tokens/enviroment.token";

const ENV = process.env as unknown as Omit<TypeConfig,'LOGGER'>

export const EnviromentProvider: ValueProvider = {
    provide: ENVIROMENT_TOKEN,
    useValue: {
        'ENV': ENV.NODE_ENV,
        'PORT': Number(ENV.PORT),
        'DB_MONGO_USER': ENV.DB_MONGO_USER,
        'DB_MONGO_PASSWORD': ENV.DB_MONGO_PASSWORD,
        'DB_MONGO_COLLECTION': ENV.DB_MONGO_COLLECTION,
        'DB_MONGO_HOST': ENV.DB_MONGO_HOST
    }
};
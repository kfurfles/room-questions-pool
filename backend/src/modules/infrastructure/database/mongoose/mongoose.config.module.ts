import { TypeConfig } from "@interfaces/IEnv"
import { MongooseModule } from "@nestjs/mongoose";

const {
  DB_MONGO_USER: USER,
  DB_MONGO_PASSWORD: PASSWORD,
  DB_MONGO_DB: DB,
  DB_MONGO_HOST: HOST
} = process.env as unknown as Omit < TypeConfig, 'LOGGER'>


export function MongooseConfigModule (){
  return MongooseModule.forRoot(`mongodb://${USER}:${PASSWORD}@${HOST}/${DB}`)
}
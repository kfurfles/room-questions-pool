import { Configuration } from 'log4js'

export type TypeEnviromentsMode = 'development' | 'qas' | 'production' 

export type TypeConfig = {
  NODE_ENV: TypeEnviromentsMode
  LOGGER: Configuration
  PORT: number
  DB_MONGO_USER: string
  DB_MONGO_PASSWORD: string
  DB_MONGO_DB: string
  DB_MONGO_HOST: string
};
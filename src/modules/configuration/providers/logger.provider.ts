import { TypeEnviromentsMode } from '@interfaces/IEnv'
import { LOGGER_TOKEN } from "../tokens/logger.token";
import { ValueProvider } from "@nestjs/common";
import { Configuration } from 'log4js';

import enviroments from './../enviroments'

const ENV = enviroments[process.env.NODE_ENV] as  TypeEnviromentsMode

export const LoggerProvider: ValueProvider<Configuration> = {
    provide: LOGGER_TOKEN,
    useValue: ENV as any
};

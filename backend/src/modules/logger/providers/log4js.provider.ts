import { FactoryProvider } from "@nestjs/common";
import { LOG4JS_TOKEN } from '../tokens/log4js.token';
import { LOGGER_TOKEN } from '../tokens/logger.token';
import Log4js, { Configuration, Logger } from 'log4js'

export const LogProvider: FactoryProvider<Logger> = {

    provide: LOG4JS_TOKEN,
    useFactory: (config: Configuration) => {
        Log4js.configure(config);
        return Log4js.getLogger();
    },
    inject:[LOGGER_TOKEN]
};
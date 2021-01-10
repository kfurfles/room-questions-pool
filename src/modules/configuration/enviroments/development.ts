import { Configuration } from "log4js";
import { join } from 'path'
import { ROOT } from "src/helpers/paths";

const logPath = join(ROOT, '..','log','development.log')

export const logger: Configuration = {
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: logPath }
    },
    categories: {
        default: { 
            appenders: [ 'console', 'file' ], level: 'debug' 
        }
    }
}
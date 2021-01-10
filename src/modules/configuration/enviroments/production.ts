import { Configuration } from "log4js";
import { join } from 'path'
import { ROOT } from "src/helpers/paths";

const logPath = join(ROOT, '..','log','production.log')

export const logger: Configuration = {
    appenders: {
        file: { type: 'file', filename: logPath }
    },
    categories: {
        default: { appenders: [ 'file' ], level: 'debug' }
    }
}

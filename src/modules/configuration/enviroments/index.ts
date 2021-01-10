/* eslint-disable @typescript-eslint/no-var-requires */
import { logger as DevLoggerConfig } from './development'
import { logger as ProdLoggerConfig } from './production'
import { logger as QasLoggerConfig } from './qas'

export default {
    development: DevLoggerConfig,
    production: ProdLoggerConfig,
    qas: QasLoggerConfig
}
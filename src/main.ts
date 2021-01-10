// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { ENVIROMENT_TOKEN } from '@tokens/enviroment.token';
import { LOG4JS_TOKEN } from '@tokens/log4js.token';
import { Logger } from 'log4js';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = app.get(ENVIROMENT_TOKEN).PORT || 5555
  const log4js = app.get(LOG4JS_TOKEN) as Logger
  await app.listen(PORT,() => {
    log4js.info(`App runnning on port: ${PORT}`)
  });
}
bootstrap();

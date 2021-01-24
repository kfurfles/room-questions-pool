// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import cors from 'cors'
import { NestFactory } from '@nestjs/core';
import { ENVIROMENT_TOKEN } from '@tokens/enviroment.token';
import { LOG4JS_TOKEN } from '@tokens/log4js.token';
import { Logger } from 'log4js';
import { AppModule } from './app.module';
import { WsAdapter } from './modules/infrastructure/socket/adapter/socket-io.adapter';

const corsOptions = {
  origin: '*',
  credentials: true
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  app.useWebSocketAdapter(new WsAdapter(app));
  const PORT = app.get(ENVIROMENT_TOKEN).PORT || 5555
  const log4js = app.get(LOG4JS_TOKEN) as Logger
  await app.listen(PORT,() => {
    log4js.info(`App runnning on port: ${PORT}`)
  });
}
bootstrap();

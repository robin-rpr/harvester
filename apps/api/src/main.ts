/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 2000;
  const host = process.env.HOST || 'localhost';
  await app.listen(port, host, () => {
    console.log('Listening at http://' + host + ':' + port + '/' + globalPrefix);
  });
}

bootstrap();

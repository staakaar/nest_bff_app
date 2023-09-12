import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  /** express serverを利用したい場合 */
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

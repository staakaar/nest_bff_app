import { NestFactory } from '@nestjs/core';
import { GraphqlAppModule } from './graphql_app.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlAppModule);
  await app.listen(3001);
}
bootstrap();

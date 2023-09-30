import { NestFactory } from '@nestjs/core';
import { GrpcAppModule } from './grpc_app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   GrpcAppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'item',
  //       protoPath: join(__dirname + '/item/item.proto'),
  //     },
  //   },
  // );
  const app = await NestFactory.create(GrpcAppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'item',
      protoPath: join(__dirname, './item/item.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();

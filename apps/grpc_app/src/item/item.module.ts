import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ITEM_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'item',
          protoPath: join(__dirname + '/item/item.proto'),
        },
      },
    ]),
  ],
})
export class ItemModule {}

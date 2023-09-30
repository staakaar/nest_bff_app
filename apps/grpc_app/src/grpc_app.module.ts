import { Module } from '@nestjs/common';
import { GrpcAppController } from './grpc_app.controller';
import { GrpcAppService } from './grpc_app.service';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ItemModule],
  controllers: [GrpcAppController],
  providers: [GrpcAppService, ItemService],
})
export class GrpcAppModule {}

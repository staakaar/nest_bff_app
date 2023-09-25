import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './model/item';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  exports: [TypeOrmModule],
  providers: [ItemResolver, ItemService],
  controllers: [ItemController],
})
export class ItemModule {}

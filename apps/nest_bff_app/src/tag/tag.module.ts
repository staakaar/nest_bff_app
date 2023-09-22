import { Module } from '@nestjs/common';
import { Tag } from './tag';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [TagController],
})
export class TagModule {}

import { Injectable } from '@nestjs/common';
import { Item } from './model/item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItem } from './CreateItem';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async findOneById(id: number): Promise<Item> {
    return this.itemRepository.findOne(id);
  }

  async findAll(id): Promise<Item[]> {
    return this.itemRepository.find(id);
  }

  async save(item: CreateItem): Promise<Item> {
    return this.itemRepository.save(item);
  }
}

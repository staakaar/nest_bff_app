import { Injectable } from '@nestjs/common';
import { Item } from './model/item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItem } from './CreateItem';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async getItem(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOneById(id: number): Promise<Item> {
    return this.itemRepository.findOne({ where: { id } });
  }

  async getItemList(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findAll(id): Promise<Item[]> {
    return this.itemRepository.find(id);
  }

  async save(item: CreateItem): Promise<Item> {
    return this.itemRepository.save(item);
  }
}

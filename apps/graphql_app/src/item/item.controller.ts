import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './model/item';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
  @Get('/items')
  getItems(): Promise<Item[]> {
    return this.itemService.getItemList();
  }
}

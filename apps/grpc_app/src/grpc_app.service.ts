import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ItemService } from './item/item.service';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GrpcAppService implements OnModuleInit {
  private itemService: ItemService;

  constructor(@Inject('ITEM_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.itemService = this.client.getService<ItemService>('ItemService');
  }
}

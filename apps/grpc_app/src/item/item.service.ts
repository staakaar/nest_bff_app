import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class ItemService {
  @GrpcMethod('ItemService', 'GetItem')
  getItem(): number {
    const id = 1;
    return id;
  }
}

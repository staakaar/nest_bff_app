/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { ItemService } from './item.service';
import { CreateItem } from './CreateItem';
import { User } from '../user/user.entity';
import { Item } from './item.entity';

@Resolver((of: any) => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}
  // private readonly userService: UserService,

  @Query(() => [Item], { name: 'item', nullable: true })
  async getItem(): Promise<Item[]> {
    return await this.itemService.getItem();
  }

  @Query(() => Item, { nullable: true })
  async item(@Args('id', { type: () => Int }) id: number): Promise<Item> {
    return await this.itemService.findOneById(id);
  }

  @Mutation(() => Item)
  async saveItem(@Args('item') item: CreateItem): Promise<Item> {
    return await this.itemService.saveItem(item);
  }

  /** 親とのリレーションシップ */
  @ResolveField('users', () => [Item])
  async posts(@Parent() user: User): Promise<Item[]> {
    const { id } = user;
    return await this.itemService.findAll({ userId: id });
  }
}

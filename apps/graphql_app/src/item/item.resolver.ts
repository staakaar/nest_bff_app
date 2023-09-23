import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { of } from 'rxjs';
import { Item } from './model/item';
import { ItemService } from './item.service';
import { CreateItem } from './CreateItem';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Resolver(of => Item)
export class ItemResolver {
  constructor(
    private readonly itemService: ItemService,
    private readonly userService: UserService,
  ) {}

  @Query((returns) => Item, { name: 'item' })
  async item(@Args('id', { type: () => Int }) id: number): Promise<Item> {
    return await this.itemService.findOneById(id);
  }

  @Mutation(returns => Item)
  async saveTask(@Args('item') item: CreateItem): Promise<Item> {
    return await this.itemService.save(item);
  }

  /** 親とのリレーションシップ */
  @ResolveField('users', (returns) => [Item])
  async posts(@Parent() user: User): Promise<Item[]> {
    const { id } = user;
    return await this.itemService.findAll({ userId: id });
  }
}

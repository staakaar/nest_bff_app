/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { NewUser } from './NewUser';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user', nullable: true })
  async getUser(): Promise<User[]> {
    return await this.userService.getUser();
  }

  @Mutation(() => User)
  async saveUser(@Args('user') user: NewUser): Promise<User> {
    return await this.userService.addUser(user);
  }
}

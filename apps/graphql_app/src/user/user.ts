import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id?: number;

  @Field()
  firstName: string;

  @Field()
  lastName?: string;

  @Field()
  age?: string;

  @Field()
  birthDay: string;
}

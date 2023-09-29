import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewUser {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: string;

  @Field()
  birthDay: string;
}

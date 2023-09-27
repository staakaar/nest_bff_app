import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field()
  id: number;

  @Field()
  itemNo: number;

  @Field()
  name: string;

  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field()
  price: number;

  @Field()
  remark: string;
}

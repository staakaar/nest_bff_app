import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field((type) => Int)
  id: number;

  @Field(type => Int)
  itemNo: number;

  @Field()
  name: string;

  @Field(type => BigInt)
  quantity: number;

  @Field()
  unit: string;

  @Field(type => BigInt)
  price: number;

  @Field(type => String)
  remark: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItem {
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

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItem {
  @Field({ nullable: false })
  id: number;

  @Field({ nullable: true })
  itemNo: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  quantity: number;

  @Field({ nullable: true })
  unit: string;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  remark: string;
}

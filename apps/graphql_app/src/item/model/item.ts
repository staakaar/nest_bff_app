import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  itemNo?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  unit?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  remark?: string;
}

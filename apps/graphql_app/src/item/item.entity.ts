import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column('int')
  @Field()
  itemNo: number;

  @Column('varchar')
  @Field()
  name: string;

  @Column('numeric')
  @Field()
  quantity: number;

  @Column('varchar')
  @Field()
  unit: string;

  @Column('numeric')
  @Field()
  price: number;

  @Column('varchar')
  @Field()
  remark: string;
}

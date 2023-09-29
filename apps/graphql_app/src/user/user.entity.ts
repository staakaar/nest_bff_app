import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column('varchar')
  @Field()
  firstName: string;

  @Column('varchar')
  @Field()
  lastName: string;

  @Column('varchar')
  @Field()
  age: string;

  @Column('varchar')
  @Field()
  birthDay: string;
}

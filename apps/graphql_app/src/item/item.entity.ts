import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  itemNo: number;

  @Column('varchar')
  name: string;

  @Column('numeric')
  quantity: number;

  @Column('varchar')
  unit: string;

  @Column('numeric')
  price: number;

  @Column('varchar')
  remark: string;
}

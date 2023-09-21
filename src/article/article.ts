import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tag } from 'src/tag/tag';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  remarks: string;

  @Column()
  isPublished: boolean;

  @ManyToMany(() => Tag, (tag) => tag.articles, { cascade: true })
  @JoinTable()
  categories: Tag[];
  tags: any;
}

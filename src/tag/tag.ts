import { Article } from 'src/article/article';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagId: number;

  @Column()
  name: string;
  articles: any;

  @ManyToMany(() => Article, (article) => article.tags, { cascade: true })
  @JoinTable()
  categories: Article[];
}

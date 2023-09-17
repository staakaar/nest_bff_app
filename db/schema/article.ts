import { Entity, EntitySchema } from 'typeorm';
import { Article } from 'src/article/article';

export const articleSchema = new EntitySchema<Article>({
  name: 'Article',
  target: Article,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    remarks: {
      type: String,
    },
    isPublished: {
      type: Boolean,
    },
  },
});

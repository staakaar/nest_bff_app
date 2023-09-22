import { EntitySchema } from 'typeorm';
import { Tag } from '../../tag/tag';

export const tagSchema = new EntitySchema<Tag>({
  name: 'Tag',
  target: Tag,
  columns: {
    id: {
      type: Number,
      primary: false,
      generated: true,
    },
    tagId: {
      primary: true,
      generated: 'uuid',
      type: 'uuid',
    },
    name: {
      type: String,
    },
  },
});

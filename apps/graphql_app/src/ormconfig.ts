import { DataSource } from 'typeorm';
import { Item } from './item/item.entity';

const source = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'graghql_app',
  entities: [Item],
  migrations: ['db/migrations/*.ts'],
  synchronize: true,
});

export default source;

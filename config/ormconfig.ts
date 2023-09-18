import { DataSource } from 'typeorm';

const source = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db',
  entities: ['src/**/*.entities.ts'],
  migrations: ['db/migrations/*.ts'],
  synchronize: false,
});

export default source;

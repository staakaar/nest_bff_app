import { DataSource } from 'typeorm';

const source = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'graghql_app',
  entities: ['src/**/*.entity.ts'],
  migrations: ['db/migrations/*.ts'],
  synchronize: false,
});

export default source;

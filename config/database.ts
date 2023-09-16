import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseConfig = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const configService = new ConfigService();
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: 'admin',
                database: 'test',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
            }
        },
    },
];
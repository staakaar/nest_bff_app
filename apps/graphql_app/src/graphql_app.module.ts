import { Module } from '@nestjs/common';
import { GraphqlAppController } from './graphql_app.controller';
import { GraphqlAppService } from './graphql_app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './user/user.service';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { ConfigModule } from '@nestjs/config';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/item.entity';
import { ItemResolver } from './item/item.resolver';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '/apps/graphql_app/src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'graghql_app',
      synchronize: true,
      entities: [Item, User],
    }),
    ItemModule,
    UserModule,
  ],
  controllers: [GraphqlAppController, ItemController],
  providers: [GraphqlAppService, UserService, ItemService, ItemResolver],
})
export class GraphqlAppModule {}

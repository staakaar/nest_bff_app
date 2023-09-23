import { Module } from '@nestjs/common';
import { GraphqlAppController } from './graphql_app.controller';
import { GraphqlAppService } from './graphql_app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './user/user.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/schema.ts'),
      },
    }),
  ],
  controllers: [GraphqlAppController],
  providers: [GraphqlAppService, UserService],
})
export class GraphqlAppModule {}

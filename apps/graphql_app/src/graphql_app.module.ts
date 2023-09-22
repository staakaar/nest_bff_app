import { Module } from '@nestjs/common';
import { GraphqlAppController } from './graphql_app.controller';
import { GraphqlAppService } from './graphql_app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
  ],
  controllers: [GraphqlAppController],
  providers: [GraphqlAppService],
})
export class GraphqlAppModule {}

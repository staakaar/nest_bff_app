import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlAppController } from './graphql_app.controller';
import { GraphqlAppService } from './graphql_app.service';

describe('GraphqlAppController', () => {
  let graphqlAppController: GraphqlAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GraphqlAppController],
      providers: [GraphqlAppService],
    }).compile();

    graphqlAppController = app.get<GraphqlAppController>(GraphqlAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(graphqlAppController.getHello()).toBe('Hello World!');
    });
  });
});

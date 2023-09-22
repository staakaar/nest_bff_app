import { Controller, Get } from '@nestjs/common';
import { GraphqlAppService } from './graphql_app.service';

@Controller()
export class GraphqlAppController {
  constructor(private readonly graphqlAppService: GraphqlAppService) {}

  @Get()
  getHello(): string {
    return this.graphqlAppService.getHello();
  }
}

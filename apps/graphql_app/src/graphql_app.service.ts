import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphqlAppService {
  getHello(): string {
    return 'Hello World!';
  }
}

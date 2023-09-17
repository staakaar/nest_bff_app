import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getArticles(): string {
    return 'Hello World!';
  }
}

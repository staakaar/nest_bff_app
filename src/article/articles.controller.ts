import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller()
export class ArticlesController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles(): string {
    return this.articleService.getArticles();
  }
}

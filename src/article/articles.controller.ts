import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article';

@Controller()
export class ArticlesController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/articles')
  getArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }
}

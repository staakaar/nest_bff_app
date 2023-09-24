import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/database';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import source from 'apps/nest_bff_app/src/config/ormconfig';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { ArticlesController } from './article/articles.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      dataSourceFactory: async () => {
        const dataSource = await source.initialize();
        return dataSource;
      },
    }),
    UserModule,
    ArticleModule,
    TagModule,
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticleService],
})
export class AppModule {}

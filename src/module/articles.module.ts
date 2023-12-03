import { Module } from '@nestjs/common';
import { ArticlesService } from '../service/articles.service';
import { ArticlesController } from '../controller/articles.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}

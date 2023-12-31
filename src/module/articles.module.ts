import { Module } from '@nestjs/common';
import { ArticlesService } from '../service/articles.service';
import { ArticlesController } from '../controller/articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}

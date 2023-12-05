import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ArticlesService } from '../service/articles.service';
import { CreateArticleDto } from '../domain/dto/create-article.dto';
import { UpdateArticleDto } from '../domain/dto/update-article.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ArticleEntity } from 'src/domain/entities/article.entity';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @ApiCreatedResponse({ type: ArticleEntity })
  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return new ArticleEntity(
      await this.articlesService.create(createArticleDto),
    );
  }

  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @Get()
  async findAll() {
    const articles = await this.articlesService.findAll();
    return articles.map((article) => new ArticleEntity(article));
  }

  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @Get('/drafts')
  async findAllDrafts() {
    const drafts = await this.articlesService.findAllDrafts();
    return drafts.map((draft) => new ArticleEntity(draft));
  }

  @ApiOkResponse({ type: ArticleEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ArticleEntity(await this.articlesService.findOne(id));
  }

  @ApiOkResponse({ type: ArticleEntity })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return new ArticleEntity(
      await this.articlesService.update(id, updateArticleDto),
    );
  }

  @ApiNoContentResponse({ type: ArticleEntity })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ArticleEntity(await this.articlesService.remove(id));
  }
}

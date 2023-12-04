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
  NotFoundException,
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
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @Get('/drafts')
  findAllDrafts() {
    return this.articlesService.findAllDrafts();
  }

  @ApiOkResponse({ type: ArticleEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @ApiOkResponse({ type: ArticleEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @ApiNoContentResponse({ type: ArticleEntity })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}

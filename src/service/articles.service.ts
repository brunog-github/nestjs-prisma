import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../domain/dto/create-article.dto';
import { UpdateArticleDto } from '../domain/dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prismaService.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prismaService.article.findMany({
      where: { published: true },
    });
  }

  findAllDrafts() {
    return this.prismaService.article.findMany({
      where: { published: false },
    });
  }

  findOne(id: string) {
    return this.prismaService.article.findUnique({
      where: { id },
      include: { User: true },
    });
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.prismaService.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: string) {
    return this.prismaService.article.delete({
      where: { id },
    });
  }
}

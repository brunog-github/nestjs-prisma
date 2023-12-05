import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';
import { UserEntity } from './user.entity';

export class ArticleEntity implements Article {
  constructor({ User, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);

    if (User) {
      this.User = new UserEntity(User);
    }
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  userId: string | null;

  @ApiProperty({ required: false, type: UserEntity })
  User?: UserEntity;
}

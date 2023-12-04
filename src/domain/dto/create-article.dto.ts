import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(500)
  @IsString()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean = false;
}

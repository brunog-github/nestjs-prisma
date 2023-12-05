import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;

  password: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updateAt: Date;
}

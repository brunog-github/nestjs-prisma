import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '../domain/dto/login.dto';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { AuthEntity } from '../domain/entities/auth.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}

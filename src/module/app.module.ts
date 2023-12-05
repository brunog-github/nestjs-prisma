import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { ArticlesModule } from './articles.module';
import { UsersModule } from './users.module';
import { AuthModule } from 'src/module/auth.module';

@Module({
  imports: [ArticlesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

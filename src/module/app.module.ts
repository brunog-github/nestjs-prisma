import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { ArticlesModule } from './articles.module';
import { UsersModule } from './users.module';

@Module({
  imports: [ArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

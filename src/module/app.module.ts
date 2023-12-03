import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ArticlesModule } from './articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

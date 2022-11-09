import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsTable } from 'src/models/news.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([NewsTable])],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}

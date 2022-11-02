import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MicroserviceResponse } from '../../types/microservice-response';
import { News } from '../../types/news';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern('news-is-exist')
  async isNewsExist(id: number): Promise<MicroserviceResponse<boolean>> {
    return this.newsService.isNewsExist(id);
  }

  @MessagePattern('news-get-by-id')
  async getNewsById(id: number): Promise<MicroserviceResponse<News>> {
    return this.newsService.getNewsById(id);
  }

  @MessagePattern('channel-create')
  async createNews(dto: CreateNewsDto): Promise<MicroserviceResponse<News>> {
    return await this.newsService.createNews(dto);
  }
}

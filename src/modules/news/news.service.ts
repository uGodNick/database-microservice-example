import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewsTable } from '../../models/news.model';
import { MicroserviceResponse } from '../../types/microservice-response';
import { News } from '../../types/news';
import { convertToNews } from '../../utils';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(NewsTable)
    private newsRepository: typeof NewsTable
  ) {}

  async isNewsExist(id: number): Promise<MicroserviceResponse<boolean>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.newsRepository.findByPk(id).then((news) => (news ? true : false));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async getNewsById(id: number): Promise<MicroserviceResponse<News>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.newsRepository.findByPk(id);
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async createNews(dto: CreateNewsDto): Promise<MicroserviceResponse<News>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.newsRepository.create(dto);
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { MicroserviceResponse } from '../../types/microservice-response';
import { News } from '../../types/news';
import { NewsService } from './news.service';
import { NewsTable } from '../../models/news.model';
import { CreateNewsDto } from './dto/create-news.dto';

const newsId = 0;
const newsTable: News = {
  id: newsId,
  channelId: 0,
  title: '',
  content: '',
  imageUrl: '',
  views: 0
};
const apiSequelizeMock = {
  findByPk: jest.fn(() => new Promise((resolve) => resolve(newsTable))),
  findOne: jest.fn(() => new Promise((resolve) => resolve(newsTable))),
  create: jest.fn(() => new Promise((resolve) => resolve(newsTable)))
};

describe('NewsService', () => {
  let service: NewsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsService,
        {
          provide: getModelToken(NewsTable),
          useValue: apiSequelizeMock
        }
      ]
    }).compile();
    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('calling isNewsExist method', async () => {
    const isNewsExistSpy = jest.spyOn(service, 'isNewsExist');
    const res = await service.isNewsExist(newsId);
    const microserviceRes = {
      data: true,
      error: null
    };
    expect(isNewsExistSpy).toHaveBeenCalledWith(newsId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling getNewsById method', async () => {
    const getNewsByIdSpy = jest.spyOn(service, 'getNewsById');
    const res = await service.getNewsById(newsId);
    const microserviceRes: MicroserviceResponse<News> = {
      data: newsTable,
      error: null
    };
    expect(getNewsByIdSpy).toHaveBeenCalledWith(newsId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling createNews method', async () => {
    const createNewsSpy = jest.spyOn(service, 'createNews');
    const dto: CreateNewsDto = {
      channelId: 0,
      title: '',
      content: ''
    };
    const res = await service.createNews(dto);
    const microserviceRes: MicroserviceResponse<any> = {
      data: newsTable,
      error: null
    };

    expect(createNewsSpy).toHaveBeenCalledWith(dto);
    expect(res).toStrictEqual(microserviceRes);
  });
});

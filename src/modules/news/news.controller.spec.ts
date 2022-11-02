import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

const newsId = 0;
class ApiServiceMock {
  isNewsExist() {}
  getNewsById() {}
  createNews() {}
}

describe('NewsController', () => {
  let controller: NewsController;
  let service: NewsService;

  beforeAll(async () => {
    const ApiServiceProvider: Provider = {
      provide: NewsService,
      useClass: ApiServiceMock
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService, ApiServiceProvider]
    }).compile();

    controller = app.get<NewsController>(NewsController);
    service = app.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling isNewsExist method', async () => {
    const isNewsExistSpy = jest.spyOn(service, 'isNewsExist');
    await controller.isNewsExist(newsId);

    expect(isNewsExistSpy).toHaveBeenCalledWith(newsId);
  });

  it('calling getNewsById method', async () => {
    const getNewsByIdSpy = jest.spyOn(service, 'getNewsById');
    await controller.getNewsById(newsId);

    expect(getNewsByIdSpy).toHaveBeenCalledWith(newsId);
  });

  it('calling createNews method', async () => {
    const createNewsSpy = jest.spyOn(service, 'createNews');
    const dto: CreateNewsDto = {
      channelId: 0,
      title: '',
      content: ''
    };
    await controller.createNews(dto);

    expect(createNewsSpy).toHaveBeenCalledWith(dto);
  });
});

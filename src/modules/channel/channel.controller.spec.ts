import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateChannelDto } from './dto/create-channel.dto';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';

const channelId = 0;
class ApiServiceMock {
  isChannelExist() {}
  getChannelById() {}
  createChannel() {}
}

describe('ChannelController', () => {
  let controller: ChannelController;
  let service: ChannelService;

  beforeAll(async () => {
    const ApiServiceProvider: Provider = {
      provide: ChannelService,
      useClass: ApiServiceMock
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChannelController],
      providers: [ChannelService, ApiServiceProvider]
    }).compile();

    controller = app.get<ChannelController>(ChannelController);
    service = app.get<ChannelService>(ChannelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling isChannelExist method', async () => {
    const isChannelExistSpy = jest.spyOn(service, 'isChannelExist');
    await controller.isChannelExist(channelId);

    expect(isChannelExistSpy).toHaveBeenCalledWith(channelId);
  });

  it('calling getChannelById method', async () => {
    const getChannelByIdSpy = jest.spyOn(service, 'getChannelById');
    await controller.getChannelById(channelId);

    expect(getChannelByIdSpy).toHaveBeenCalledWith(channelId);
  });

  it('calling createChannel method', async () => {
    const createChannelSpy = jest.spyOn(service, 'createChannel');
    const dto: CreateChannelDto = {
      name: '',
      platformId: 0,
      subscribers: 0,
      url: ''
    };
    await controller.createChannel(dto);

    expect(createChannelSpy).toHaveBeenCalledWith(dto);
  });
});

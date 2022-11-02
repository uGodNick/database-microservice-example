import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { MicroserviceResponse } from '../../types/microservice-response';
import { Channel } from '../../types/channel';
import { ChannelService } from './channel.service';
import { ChannelTable } from '../../models/channel.model';
import { CreateChannelDto } from './dto/create-channel.dto';

const channelId = 0;
const channelTable: Channel = {
  id: channelId,
  name: '',
  platformId: 0,
  subscribers: 0,
  url: '',
  isUseToParse: false,
  news: undefined,
  platform: undefined,
  regions: undefined,
  tags: undefined
};
const apiSequelizeMock = {
  findByPk: jest.fn(() => new Promise((resolve) => resolve(channelTable))),
  findOne: jest.fn(() => new Promise((resolve) => resolve(channelTable))),
  create: jest.fn(() => new Promise((resolve) => resolve(channelTable)))
};

describe('ChannelService', () => {
  let service: ChannelService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChannelService,
        {
          provide: getModelToken(ChannelTable),
          useValue: apiSequelizeMock
        }
      ]
    }).compile();
    service = module.get<ChannelService>(ChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('calling isChannelExist method', async () => {
    const isChannelExistSpy = jest.spyOn(service, 'isChannelExist');
    const res = await service.isChannelExist(channelId);
    const microserviceRes = {
      data: true,
      error: null
    };
    expect(isChannelExistSpy).toHaveBeenCalledWith(channelId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling getChannelById method', async () => {
    const getChannelByIdSpy = jest.spyOn(service, 'getChannelById');
    const res = await service.getChannelById(channelId);
    const microserviceRes: MicroserviceResponse<Channel> = {
      data: channelTable,
      error: null
    };
    expect(getChannelByIdSpy).toHaveBeenCalledWith(channelId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling createChannel method', async () => {
    const createChannelSpy = jest.spyOn(service, 'createChannel');
    const dto: CreateChannelDto = {
      name: '',
      platformId: 0,
      subscribers: 0,
      url: ''
    };
    const res = await service.createChannel(dto);
    const microserviceRes: MicroserviceResponse<any> = {
      data: channelTable,
      error: null
    };

    expect(createChannelSpy).toHaveBeenCalledWith(dto);
    expect(res).toStrictEqual(microserviceRes);
  });
});

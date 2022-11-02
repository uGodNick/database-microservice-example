import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { MicroserviceResponse } from '../../types/microservice-response';
import { PlatformService } from './platform.service';
import { Platform } from '../../types/platform';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { PlatformTable } from '../../models/platform.model';

const platformId = 0;
const platformTable: Platform = {
  id: platformId,
  url: '',
  urlToParse: '',
  name: '',
  icon: '',
  channels: undefined
};
const apiSequelizeMock = {
  findByPk: jest.fn(() => new Promise((resolve) => resolve(platformTable))),
  findOne: jest.fn(() => new Promise((resolve) => resolve(platformTable))),
  create: jest.fn(() => new Promise((resolve) => resolve(platformTable)))
};

describe('PlatformService', () => {
  let service: PlatformService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlatformService,
        {
          provide: getModelToken(PlatformTable),
          useValue: apiSequelizeMock
        }
      ]
    }).compile();
    service = module.get<PlatformService>(PlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('calling isPlatformExist method', async () => {
    const isPlatformExistSpy = jest.spyOn(service, 'isPlatformExist');
    const res = await service.isPlatformExist(platformId);
    const microserviceRes = {
      data: true,
      error: null
    };
    expect(isPlatformExistSpy).toHaveBeenCalledWith(platformId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling getPlatformById method', async () => {
    const getPlatformByIdSpy = jest.spyOn(service, 'getPlatformById');
    const res = await service.getPlatformById(platformId);
    const microserviceRes: MicroserviceResponse<Platform> = {
      data: platformTable,
      error: null
    };
    expect(getPlatformByIdSpy).toHaveBeenCalledWith(platformId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling createPlatform method', async () => {
    const createPlatformSpy = jest.spyOn(service, 'createPlatform');
    const dto: CreatePlatformDto = {
      url: '',
      urlToParse: '',
      name: '',
      icon: ''
    };
    const res = await service.createPlatform(dto);
    const microserviceRes: MicroserviceResponse<any> = {
      data: platformTable,
      error: null
    };

    expect(createPlatformSpy).toHaveBeenCalledWith(dto);
    expect(res).toStrictEqual(microserviceRes);
  });
});

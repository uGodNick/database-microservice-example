import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

const platformId = 0;
class ApiServiceMock {
  isPlatformExist() {}
  getPlatformById() {}
  createPlatform() {}
}

describe('PlatformController', () => {
  let controller: PlatformController;
  let service: PlatformService;

  beforeAll(async () => {
    const ApiServiceProvider: Provider = {
      provide: PlatformService,
      useClass: ApiServiceMock
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlatformController],
      providers: [PlatformService, ApiServiceProvider]
    }).compile();

    controller = app.get<PlatformController>(PlatformController);
    service = app.get<PlatformService>(PlatformService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling isPlatformExist method', async () => {
    const isPlatformExistSpy = jest.spyOn(service, 'isPlatformExist');
    await controller.isPlatformExist(platformId);

    expect(isPlatformExistSpy).toHaveBeenCalledWith(platformId);
  });

  it('calling getPlatformById method', async () => {
    const getPlatformByIdSpy = jest.spyOn(service, 'getPlatformById');
    await controller.getPlatformById(platformId);

    expect(getPlatformByIdSpy).toHaveBeenCalledWith(platformId);
  });

  it('calling createPlatform method', async () => {
    const createPlatformSpy = jest.spyOn(service, 'createPlatform');
    const dto: CreatePlatformDto = {
      url: '',
      urlToParse: '',
      name: '',
      icon: ''
    };
    await controller.createPlatform(dto);

    expect(createPlatformSpy).toHaveBeenCalledWith(dto);
  });
});

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MicroserviceResponse } from '../../types/microservice-response';
import { Platform } from '../../types/platform';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { PlatformService } from './platform.service';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @MessagePattern('platform-is-exist')
  async isPlatformExist(id: number): Promise<MicroserviceResponse<boolean>> {
    return this.platformService.isPlatformExist(id);
  }

  @MessagePattern('platform-get-by-id')
  async getPlatformById(id: number): Promise<MicroserviceResponse<Platform>> {
    return this.platformService.getPlatformById(id);
  }

  @MessagePattern('platform-create')
  async createPlatform(dto: CreatePlatformDto): Promise<MicroserviceResponse<Platform>> {
    return await this.platformService.createPlatform(dto);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PlatformTable } from '../../models/platform.model';
import { MicroserviceResponse } from '../../types/microservice-response';
import { Platform } from '../../types/platform';
import { convertToPlatform } from '../../utils';
import { CreatePlatformDto } from './dto/create-platform.dto';

@Injectable()
export class PlatformService {
  constructor(
    @InjectModel(PlatformTable)
    private platformRepository: typeof PlatformTable
  ) {}

  async isPlatformExist(id: number): Promise<MicroserviceResponse<boolean>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.platformRepository
        .findByPk(id)
        .then((platform) => (platform ? true : false));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async getPlatformById(id: number): Promise<MicroserviceResponse<Platform>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToPlatform(await this.platformRepository.findByPk(id));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async createPlatform(dto: CreatePlatformDto): Promise<MicroserviceResponse<Platform>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToPlatform(await this.platformRepository.create(dto));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }
}

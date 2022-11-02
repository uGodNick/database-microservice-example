import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ChannelTable } from '../../models/channel.model';
import { Channel } from '../../types/channel';
import { MicroserviceResponse } from '../../types/microservice-response';
import { convertToChannel } from '../../utils';
import { CreateChannelDto } from './dto/create-channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(ChannelTable)
    private channelRepository: typeof ChannelTable
  ) {}

  async isChannelExist(id: number): Promise<MicroserviceResponse<boolean>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.channelRepository
        .findByPk(id)
        .then((channel) => (channel ? true : false));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async getChannelById(id: number): Promise<MicroserviceResponse<Channel>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToChannel(await this.channelRepository.findByPk(id));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async createChannel(dto: CreateChannelDto): Promise<MicroserviceResponse<Channel>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToChannel(await this.channelRepository.create(dto));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }
}

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Channel } from '../../types/channel';
import { MicroserviceResponse } from '../../types/microservice-response';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @MessagePattern('channel-is-exist')
  async isChannelExist(id: number): Promise<MicroserviceResponse<boolean>> {
    return this.channelService.isChannelExist(id);
  }

  @MessagePattern('channel-get-by-id')
  async getChannelById(id: number): Promise<MicroserviceResponse<Channel>> {
    return this.channelService.getChannelById(id);
  }

  @MessagePattern('channel-create')
  async createChannel(dto: CreateChannelDto): Promise<MicroserviceResponse<Channel>> {
    return await this.channelService.createChannel(dto);
  }
}

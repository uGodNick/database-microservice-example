import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChannelTable } from 'src/models/channel.model';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';

@Module({
  imports: [SequelizeModule.forFeature([ChannelTable])],
  controllers: [ChannelController],
  providers: [ChannelService]
})
export class ChannelModule {}

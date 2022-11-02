import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlatformTable } from 'src/models/platform.model';

@Module({
  imports: [SequelizeModule.forFeature([PlatformTable])],
  providers: [PlatformService],
  controllers: [PlatformController]
})
export class PlatformModule {}

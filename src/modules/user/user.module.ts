import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserTable } from 'src/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([UserTable])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

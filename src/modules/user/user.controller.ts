import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { MicroserviceResponse } from '../../types/microservice-response';
import { User } from '../../types/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user-is-exist')
  async isUserExist(id: number): Promise<MicroserviceResponse<boolean>> {
    return this.userService.isUserExist(id);
  }

  @MessagePattern('user-get-by-id')
  async getUserById(id: number): Promise<MicroserviceResponse<User>> {
    return this.userService.getUserById(id);
  }

  @MessagePattern('user-get-by-email')
  async getUserByEmail(email: string): Promise<MicroserviceResponse<User>> {
    return this.userService.getUserByEmail(email);
  }

  @MessagePattern('user-create')
  async createUser(dto: CreateUserDto): Promise<MicroserviceResponse<User>> {
    return this.userService.createUser(dto);
  }
}

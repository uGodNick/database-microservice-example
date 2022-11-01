import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../types/user';
import { convertToUser } from '../../utils';
import { UserTable } from '../../models/user.model';
import { MicroserviceResponse } from '../../types/microservice-response';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserTable)
    private userRepository: typeof UserTable
  ) {}

  async isUserExist(id: number): Promise<MicroserviceResponse<boolean>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = await this.userRepository.findByPk(id).then((user) => (user ? true : false));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async getUserById(id: number): Promise<MicroserviceResponse<UserTable>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToUser(await this.userRepository.findByPk(id));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async getUserByEmail(email: string): Promise<MicroserviceResponse<UserTable>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToUser(await this.userRepository.findOne({ where: { email: email } }));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }

  async createUser(dto: CreateUserDto): Promise<MicroserviceResponse<User>> {
    const response = {
      data: null,
      error: null
    };

    try {
      response.data = convertToUser(await this.userRepository.create(dto));
    } catch (err) {
      response.error = err.message;
    }

    return response;
  }
}

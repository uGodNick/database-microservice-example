import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/sequelize';
import { UserTable } from '../../models/user.model';
import { MicroserviceResponse } from '../../types/microservice-response';
import { User } from '../../types/user';

const userId = 0;
const email = '';
const userTable: User = {
  id: userId,
  name: '',
  email,
  passwordHash: '',
  imageUrl: '',
  comments: [],
  favoriteChannels: []
};
const apiSequelizeMock = {
  findByPk: jest.fn(() => new Promise((resolve) => resolve(userTable))),
  findOne: jest.fn(() => new Promise((resolve) => resolve(userTable))),
  create: jest.fn(() => new Promise((resolve) => resolve(userTable)))
};

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(UserTable),
          useValue: apiSequelizeMock
        }
      ]
    }).compile();
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('calling isUserExist method', async () => {
    const isUserExistSpy = jest.spyOn(service, 'isUserExist');
    const res = await service.isUserExist(userId);
    const microserviceRes = {
      data: true,
      error: null
    };
    expect(isUserExistSpy).toHaveBeenCalledWith(userId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling getUserById method', async () => {
    const getUserByIdSpy = jest.spyOn(service, 'getUserById');
    const res = await service.getUserById(userId);
    const microserviceRes: MicroserviceResponse<User> = {
      data: userTable,
      error: null
    };
    expect(getUserByIdSpy).toHaveBeenCalledWith(userId);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling getUserByEmail method', async () => {
    const getUserByEmailSpy = jest.spyOn(service, 'getUserByEmail');
    const res = await service.getUserByEmail(email);
    const microserviceRes: MicroserviceResponse<User> = {
      data: userTable,
      error: null
    };
    expect(getUserByEmailSpy).toHaveBeenCalledWith(email);
    expect(res).toStrictEqual(microserviceRes);
  });

  it('calling createUser method', async () => {
    const createUserSpy = jest.spyOn(service, 'createUser');
    const dto: CreateUserDto = {
      name: '',
      email: '',
      passwordHash: ''
    };
    const res = await service.createUser(dto);
    const microserviceRes: MicroserviceResponse<any> = {
      data: userTable,
      error: null
    };

    expect(createUserSpy).toHaveBeenCalledWith(dto);
    expect(res).toStrictEqual(microserviceRes);
  });
});

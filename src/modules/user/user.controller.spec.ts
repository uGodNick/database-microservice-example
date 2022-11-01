import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const userId = 0;
const email = '';
class ApiServiceMock {
  isUserExist() {}
  getUserById() {}
  getUserByEmail() {}
  createUser() {}
}

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeAll(async () => {
    const ApiServiceProvider: Provider = {
      provide: UserService,
      useClass: ApiServiceMock
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, ApiServiceProvider]
    }).compile();

    controller = app.get<UserController>(UserController);
    service = app.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling isUserExist method', async () => {
    const isUserExistSpy = jest.spyOn(service, 'isUserExist');
    await controller.isUserExist(userId);

    expect(isUserExistSpy).toHaveBeenCalledWith(userId);
  });

  it('calling getUserById method', async () => {
    const getUserByIdSpy = jest.spyOn(service, 'getUserById');
    await controller.getUserById(userId);

    expect(getUserByIdSpy).toHaveBeenCalledWith(userId);
  });

  it('calling getUserByEmail method', async () => {
    const getUserByEmailSpy = jest.spyOn(service, 'getUserByEmail');
    await controller.getUserByEmail(email);

    expect(getUserByEmailSpy).toHaveBeenCalledWith(email);
  });

  it('calling createUser method', async () => {
    const createUserSpy = jest.spyOn(service, 'createUser');
    const dto: CreateUserDto = {
      name: 'Test',
      email: 'test@email.com',
      passwordHash: 'hash'
    };
    await controller.createUser(dto);

    expect(createUserSpy).toHaveBeenCalledWith(dto);
  });
});

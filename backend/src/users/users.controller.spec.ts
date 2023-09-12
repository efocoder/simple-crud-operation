import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import {
  mockLogin,
  mockUserService,
  userMock,
} from './spec-helpers/user-mocks';
import { providers } from './spec-helpers/providers';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: providers,
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create and return user object', async function () {
      controller.create = mockUserService().create.mockResolvedValue(userMock);
      const result = await controller.create(userMock);

      expect(typeof result).toBe('object');
      console.log(result['data']);
      expect(controller.create).toHaveBeenCalledWith(userMock);
      expect(result['email']).not.toBeNull();
      expect(result['email']).toEqual('okay@testing.com');
      expect(result['nickname']).not.toBeNull();
      expect(result['nickname']).toEqual('John Kumah');
      expect(result['phone']).not.toBeNull();
      expect(result['phone']).toEqual('0243223323');
    });
  });

  describe('login', () => {
    it('should log user in with correct credentials', async function () {
      controller.login = mockUserService().login.mockResolvedValue(mockLogin);
      const result = await controller.login(mockLogin);
      expect(result).toEqual(mockLogin);
    });
  });
});

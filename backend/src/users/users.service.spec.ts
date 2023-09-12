import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import {
  mockLogin,
  mockUserService,
  userMock,
} from './spec-helpers/user-mocks';
import { providers } from './spec-helpers/providers';

userMock.phone = '024325555'; // to be able to pass the unique validator for phone
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: providers,
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should sign user up and return user object', async function () {
      mockUserService().create.mockResolvedValue(userMock);
      const result = await service.create(userMock);
      //
      expect(result.nickname).toEqual(userMock.nickname);
      expect(result.email).toEqual(userMock.email);
    });
  });

  describe('login', () => {
    it('should log user in with correct credentials', async function () {
      service.login = mockUserService().login.mockResolvedValue(mockLogin);
      const result = await service.login(mockLogin);

      expect(result).toEqual(mockLogin);
    });
  });
});

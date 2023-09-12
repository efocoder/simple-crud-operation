import { CreateUserDto, LoginDto } from '../dto/create-user.dto';

export const userMock: CreateUserDto = {
  email: 'okay@testing.com',
  nickname: 'John Kumah',
  phone: '0243223323',
  password: 'Testpassword',
};

export const mockLogin: LoginDto = {
  email: 'okay@testing.com',
  password: 'Testpassword',
};

export const mockUserService = () => ({
  create: jest.fn(),
  login: jest.fn(),
});

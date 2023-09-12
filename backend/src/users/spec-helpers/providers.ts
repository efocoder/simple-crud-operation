import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { userMock } from './user-mocks';

export const providers = [
  UsersService,
  JwtService,
  {
    provide: UsersService,
    useValue: {
      new: jest.fn().mockResolvedValue(userMock),
      constructor: jest.fn().mockResolvedValue(userMock),
      create: jest.fn().mockResolvedValue(userMock),
      findOne: jest.fn(),
    },
  },
];

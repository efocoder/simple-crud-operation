import { UsersService } from '../src/users/users.service';

export function providers(provides: any[], mock: any): any[] {
  return [
    makeProvides(provides),
    {
      provide: UsersService,
      useValue: {
        new: jest.fn().mockResolvedValue(mock),
        constructor: jest.fn().mockResolvedValue(mock),
        create: jest.fn().mockResolvedValue(mock),
        findOne: jest.fn(),
      },
    },
  ];
}

function makeProvides(provides: any[]): any {
  provides.forEach((provide) => {
    return `${provide},`;
  });
}

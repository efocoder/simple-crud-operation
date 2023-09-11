import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './entities/user.entity';

export const GetUser = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: User = await User.findOneBy({ id: request.user.userId });

    return user;
  },
);

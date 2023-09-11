import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1hour' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [JwtModule],
})
export class UsersModule {}

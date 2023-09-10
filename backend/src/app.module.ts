import { Module } from '@nestjs/common';
import { Config } from 'config/config';
import { UsersModule } from './users/users.module';
import { DatabaseConfig } from 'config/database';

@Module({
  imports: [DatabaseConfig, Config, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

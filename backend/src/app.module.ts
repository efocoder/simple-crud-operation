import { Module } from '@nestjs/common';
import { Config } from 'src/config/config';
import { UsersModule } from './users/users.module';
import { DatabaseConfig } from 'src/config/database';
import { CampaignsModule } from './campaigns/campaigns.module';

@Module({
  imports: [DatabaseConfig, Config, UsersModule, CampaignsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

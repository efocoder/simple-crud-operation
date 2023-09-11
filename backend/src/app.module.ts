import { Module } from '@nestjs/common';
import { Config } from 'config/config';
import { UsersModule } from './users/users.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    Config,
    UsersModule,
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

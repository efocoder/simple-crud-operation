import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { GroupsFactory } from './seeds/factories/group.factory';
import MainSeeder from './seeds/main.seeder';

export const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  dropSchema: true,
  logging: true,
  synchronize: true, // TODO: Remove and configure migrations [sedem]
  factories: [GroupsFactory],
  seeds: [MainSeeder],
};

const dataSource: DataSource = new DataSource(dataSourceOptions);

export default dataSource;

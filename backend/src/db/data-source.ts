// import { ConfigService } from '@nestjs/config';
// import { DataSource, DataSourceOptions } from 'typeorm';

// export const configService = new ConfigService();
// export const dataSourceOptions: DataSourceOptions = {
//   type: 'postgres',
//   host: configService.get('POSTGRES_HOST'),
//   port: configService.get('POSTGRES_PORT'),
//   username: configService.get('POSTGRES_USER'),
//   password: configService.get('POSTGRES_PASSWORD'),
//   database: configService.get('POSTGRES_DB'),
//   entities: ['dist/**/*.entity.js'],
//   migrations: ['dist/db/migrations/*.js'],
//   logging: true,
//   synchronize: false, // TODO: Remove and configure migrations [sedem]
//   seeds: ['db/seeding/seeds/**/*{.ts,.js}'],
//   factories: ['db/seeding/factories/**/*{.ts,.js}'],
// };

// const dataSource: DataSource = new DataSource(dataSourceOptions);

// export default dataSource;

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
  },
  test: {
    dialect: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
  },
  production: {
    dialect: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
  },
};

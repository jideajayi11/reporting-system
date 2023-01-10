import { Knex } from "knex";
import envConfig from "dotenv/config"; envConfig;

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_USER: user,
  DB_PASSWORD: password,
  DATABASE: database,
} = process.env;

const config:Knex.Config = {
  client: 'pg',
  connection: {
    host,
    port: parseInt(port as string),
    user,
    password,
    database,
  },
  // connecton: process.env.DB_CONN_STRING,
  searchPath: ['knex', 'public'],
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  },
};

export default config;

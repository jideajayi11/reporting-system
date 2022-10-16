"use strict";
exports.__esModule = true;
var config_1 = require("dotenv/config");
// config_1["default"];
var _a = process.env, host = _a.DB_HOST, port = _a.DB_PORT, user = _a.DB_USER, password = _a.DB_PASSWORD, database = _a.DATABASE;
var config = {
    client: 'pg',
    connection: {
        host: host,
        port: parseInt(port),
        user: user,
        password: password,
        database: database
    },
    searchPath: ['knex', 'public'],
    migrations: {
        tableName: 'knex_migrations',
        directory: './db/migrations'
    },
    seeds: {
        directory: './db/seeds'
    }
};
exports["default"] = config;

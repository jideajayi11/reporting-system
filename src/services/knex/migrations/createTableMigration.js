const {
  users,
  departments,
  roles,
  reportFields,
  reports,
} = require("../schema");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users)
    .createTable('departments', departments)
    .createTable('roles', roles)
    .createTable('reportFields', reportFields)
    .createTable('reports', reports)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('departments')
    .dropTable('roles')
    .dropTable('reportFields')
    .dropTable('reports');
};

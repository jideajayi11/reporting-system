const {
  usersAssoc,
  departmentsAssoc,
  reportFieldsAssoc,
  reportsAssoc,
} = require("../schema");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('users', usersAssoc)
    .alterTable('departments', departmentsAssoc)
    .alterTable('reportFields', reportFieldsAssoc)
    .alterTable('reports', reportsAssoc);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('users', (table) => table.dropForeign('departmentId'))
    .alterTable('users', (table) => table.dropForeign('roleId'))
    .alterTable('departments', (table) => table.dropForeign('addedBy'))
    .alterTable('reportFields', (table) => table.dropForeign('addedBy'))
    .alterTable('reportFields', (table) => table.dropForeign('departmentId'))
    .alterTable('reports', (table) => table.dropForeign('addedBy'))
    .alterTable('reports', (table) => table.dropForeign('field'));
};

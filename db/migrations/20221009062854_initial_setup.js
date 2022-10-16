// import { users, departments, roles, reportFields, reports } from "../../src/services/knex/schema";
const {
  users,
  usersAssoc,
  departments,
  departmentsAssoc,
  roles,
  reportFields,
  reportFieldsAssoc,
  reports,
  reportsAssoc,
} = require("../../src/services/knex/schema");

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
    .dropTable('users')
    .dropTable('departments')
    .dropTable('roles')
    .dropTable('reportFields')
    .dropTable('reports');
};

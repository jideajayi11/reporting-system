import { Knex } from "knex";

export const users = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("title");
  table.string("fullname").notNullable();
  table.integer("addedBy").notNullable();
  table.string("password");
  table.boolean("resetPassword").defaultTo(true);
  table.timestamps(true, true);
}

export const usersAssoc = (table: Knex.TableBuilder) => {
  table.integer("departmentId").references("id")
    .inTable("departments").notNullable();
  table.integer("roleId").references("id")
    .inTable("roles").notNullable();
}

export const departments = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("name").notNullable();
  table.timestamps(true, true);
}

export const departmentsAssoc = (table: Knex.TableBuilder) => {
  table.integer("addedBy").references("id")
    .inTable("users").notNullable();
}

export const roles = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("name").notNullable();
  table.timestamps(true, true);
}

export const reportFields = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("field").notNullable();
  table.timestamps(true, true);
}

export const reportFieldsAssoc = (table: Knex.TableBuilder) => {
  table.integer("departmentId").references("id")
    .inTable("departments").notNullable();
  table.integer("addedBy").references("id")
    .inTable("users").notNullable();
}

export const reports = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("fieldValue").notNullable();
  table.timestamps(true, true);
}

export const reportsAssoc = (table: Knex.TableBuilder) => {
  table.integer("field").references("id")
    .inTable("reportFields").notNullable();
  table.integer("addedBy").references("id")
    .inTable("users").notNullable();
}

import { Knex } from "knex";

export const users = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("title");
  table.string("fullname").notNullable();
  table.string("email").notNullable().unique();
  table.integer("addedBy").notNullable();
  table.string("password");
  table.boolean("resetPassword").defaultTo(true);
  table.timestamps(true, true);
  table.integer("departmentId").notNullable();
  table.integer("roleId").notNullable();
}

export const usersAssoc = (table: Knex.TableBuilder) => {
  table.foreign("departmentId").references("id")
    .inTable("departments");
  table.foreign("roleId").references("id")
    .inTable("roles");
}

export const departments = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("name").notNullable();
  table.timestamps(true, true);
  table.integer("addedBy").notNullable();
}

export const departmentsAssoc = (table: Knex.TableBuilder) => {
  table.foreign("addedBy").references("id")
    .inTable("users");
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
  table.integer("departmentId").notNullable();
  table.integer("addedBy").notNullable();
}

export const reportFieldsAssoc = (table: Knex.TableBuilder) => {
  table.foreign("departmentId").references("id")
    .inTable("departments");
  table.foreign("addedBy").references("id")
    .inTable("users");
}

export const reports = (table: Knex.TableBuilder) => {
  table.increments("id").primary().unique();
  table.string("fieldValue").notNullable();
  table.timestamps(true, true);
  table.integer("field").notNullable();
  table.integer("addedBy").notNullable();
}

export const reportsAssoc = (table: Knex.TableBuilder) => {
  table.foreign("field").references("id")
    .inTable("reportFields");
  table.foreign("addedBy").references("id")
    .inTable("users");
}

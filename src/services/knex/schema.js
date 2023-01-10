"use strict";
exports.__esModule = true;
exports.reportsAssoc = exports.reports = exports.reportFieldsAssoc = exports.reportFields = exports.roles = exports.departmentsAssoc = exports.departments = exports.usersAssoc = exports.users = void 0;
var users = function (table) {
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
};
exports.users = users;
var usersAssoc = function (table) {
    table.foreign("departmentId").references("id")
        .inTable("departments");
    table.foreign("roleId").references("id")
        .inTable("roles");
};
exports.usersAssoc = usersAssoc;
var departments = function (table) {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.timestamps(true, true);
    table.integer("addedBy").notNullable();
};
exports.departments = departments;
var departmentsAssoc = function (table) {
    table.foreign("addedBy").references("id")
        .inTable("users");
};
exports.departmentsAssoc = departmentsAssoc;
var roles = function (table) {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.timestamps(true, true);
};
exports.roles = roles;
var reportFields = function (table) {
    table.increments("id").primary().unique();
    table.string("field").notNullable();
    table.timestamps(true, true);
    table.integer("departmentId").notNullable();
    table.integer("addedBy").notNullable();
};
exports.reportFields = reportFields;
var reportFieldsAssoc = function (table) {
    table.foreign("departmentId").references("id")
        .inTable("departments");
    table.foreign("addedBy").references("id")
        .inTable("users");
};
exports.reportFieldsAssoc = reportFieldsAssoc;
var reports = function (table) {
    table.increments("id").primary().unique();
    table.string("fieldValue").notNullable();
    table.timestamps(true, true);
    table.integer("field").notNullable();
    table.integer("addedBy").notNullable();
};
exports.reports = reports;
var reportsAssoc = function (table) {
    table.foreign("field").references("id")
        .inTable("reportFields");
    table.foreign("addedBy").references("id")
        .inTable("users");
};
exports.reportsAssoc = reportsAssoc;

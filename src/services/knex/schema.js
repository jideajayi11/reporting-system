"use strict";
exports.__esModule = true;
exports.reportsAssoc = exports.reports = exports.reportFieldsAssoc = exports.reportFields = exports.roles = exports.departmentsAssoc = exports.departments = exports.usersAssoc = exports.users = void 0;
var users = function (table) {
    table.increments("id").primary().unique();
    table.string("title");
    table.string("fullname").notNullable();
    table.integer("addedBy").notNullable();
    table.timestamps(true, true);
};
exports.users = users;
var usersAssoc = function (table) {
    table.integer("departmentId").references("id")
        .inTable("departments").notNullable();
    table.integer("roleId").references("id")
        .inTable("roles").notNullable();
};
exports.usersAssoc = usersAssoc;
var departments = function (table) {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.timestamps(true, true);
};
exports.departments = departments;
var departmentsAssoc = function (table) {
    table.integer("addedBy").references("id")
        .inTable("users").notNullable();
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
};
exports.reportFields = reportFields;
var reportFieldsAssoc = function (table) {
    table.integer("departmentId").references("id")
        .inTable("departments").notNullable();
    table.integer("addedBy").references("id")
        .inTable("users").notNullable();
};
exports.reportFieldsAssoc = reportFieldsAssoc;
var reports = function (table) {
    table.increments("id").primary().unique();
    table.string("fieldValue").notNullable();
    table.timestamps(true, true);
};
exports.reports = reports;
var reportsAssoc = function (table) {
    table.integer("field").references("id")
        .inTable("reportFields").notNullable();
    table.integer("addedBy").references("id")
        .inTable("users").notNullable();
};
exports.reportsAssoc = reportsAssoc;

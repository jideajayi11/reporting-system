/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex('departments').insert([
    {
      id: 1,
      name: 'engineering',
      addedBy: 1,
    }
  ]);
  await knex('users').insert([
    {
      id: 1,
      fullname: 'my s-admin',
      email: 'jideajayi11@gmail.com',
      addedBy: 1,
      departmentId: 1,
      roleId: 1,
      password: 'qwerty',
    }
  ]);
  await knex('roles').insert([
    {
      id: 1,
      name: 'admin',
    },
    {
      id: 2,
      name: 'hod',
    },
    {
      id: 3,
      name: 'staff',
    },
  ]);
};

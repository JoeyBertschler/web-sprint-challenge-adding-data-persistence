// No need to change this file
const knex = require('knex');
const configurations = require('../knexfile.js');
const environment = process.env.NODE_ENV || 'development';

// What knex configuration is actually used?
// console.log(configurations[environment]);

// {
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   migrations: { directory: './data/migrations' },
//   pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
//   connection: { filename: './data/database.db3' },
//   seeds: { directory: './data/seeds' },
// }

// That depends on the value of process.env.NODE_ENV!
module.exports = knex(configurations[environment]);

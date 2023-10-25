const mysql = require('mysql2/promise');

export const pool = mysql.createPool({
  host: process.env.DB_HOST ?? '',
  user: process.env.USER ?? '',
  password: process.env.PASSWORD ?? '',
  database: 'TYPEAHEAD',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
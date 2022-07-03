const mysql = require('mysql');

//config

const conn = mysql.createConnection({
  host: 'mysql5046.site4now.net',
  user: 'a8949b_maksymz',
  database: 'db_a8949b_maksymz',
  password: '060477maks',
});

conn.connect(function (err) {
  if (err) {
    return console.error('Warning: ' + err.message);
  } else {
    console.log('Database ---- OK');
  }
});

let query_stores = 'SELECT * FROM stores';
let query_items = 'SELECT * FROM items';

conn.query(query_stores, (err, result) => {
  console.log(err);
  console.log(result);
  console.log(result[1]['name']);
});

conn.query(query_items, (err, result) => {
  console.log(err);
  console.log(result);
  console.log(result[1]['name_i']);
});

conn.end(function (err) {
  if (err) {
    return console.error('Warning: ' + err.message);
  } else {
    console.log('Database ---- Close');
  }
});

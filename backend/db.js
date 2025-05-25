
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SamHadz123',
  database: 'tastelab'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

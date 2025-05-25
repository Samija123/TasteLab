const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SamHadz123',
  database: 'tastelab'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return; }
  console.log('Connected to MySQL database.');
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/testdb', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.json({ result: results[0].solution });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

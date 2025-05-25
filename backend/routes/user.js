
const express = require('express');
const router = express.Router();
const pool = require('../db');


router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

module.exports = router;


router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        res.json({ id: result.insertId, name, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

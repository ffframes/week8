const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({
    connectionString: 'postgres://localhost/guestbook'
});

app.get('/posts', async (req, res) => {
    const result = await db.query('SELECT * FROM posts ORDER BY id DESC');
    res.json(result.rows);
});

app.post('/posts', async (req, res) => {
    const { name, content } = req.body;
    await db.query('INSERT INTO posts (name, content) VALUES ($1, $2)', [name, content]);
    res.json({ status: 'success' });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

hello
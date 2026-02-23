const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'posts.json');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const readPosts = () => {
  try {
    if (!fs.existsSync(DB_FILE)) return [{ id: 1, name: "System", content: "Welcome back!" }];
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writePosts = (posts) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
};

app.get('/posts', (req, res) => {
  const posts = readPosts();
  res.json([...posts].reverse());
});

app.post('/posts', (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) return res.status(400).json({ error: "Required fields missing" });

  const posts = readPosts();
  const newPost = { id: Date.now(), name, content };
  
  posts.push(newPost);
  writePosts(posts);
  
  res.status(201).json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} with persistent storage`);
});
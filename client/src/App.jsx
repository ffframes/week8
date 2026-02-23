import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { name: userName, content: message };

    await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });

    setUserName('');
    setMessage('');
    fetchPosts();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Guestbook</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required 
        />
        <br /><br />
        <textarea 
          placeholder="Message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Posts</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px 0', padding: '10px' }}>
            <strong>{post.name}</strong>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS2', body: 'Description' },
    { id: 3, title: 'JS3', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="JS" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;

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

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="JS" />
    </div>
  );
}

export default App;

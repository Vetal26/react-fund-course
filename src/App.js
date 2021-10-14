import React, { useState } from 'react';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import MySelect from './components/UI/select/MySelect.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS8', body: 'Description' },
    { id: 2, title: 'JS2', body: 'Description4' },
    { id: 3, title: 'JS3', body: 'Description1' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Description' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="JS" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;

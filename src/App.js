/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import MyInput from './components/UI/input/MyInput.jsx';
import MySelect from './components/UI/select/MySelect.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS8', body: 'Description' },
    { id: 2, title: 'JS2', body: 'Description4' },
    { id: 3, title: 'JS3', body: 'Description1' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
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
        <PostList remove={removePost} posts={sortedPosts} title="JS" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;

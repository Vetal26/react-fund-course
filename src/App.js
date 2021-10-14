/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS8', body: 'Description' },
    { id: 2, title: 'jS2', body: 'Description4' },
    { id: 3, title: 'JS3', body: 'Description1' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(
    () =>
      sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(filter.query.toLowerCase()),
      ),
    [filter.query, sortedPosts],
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS" />
    </div>
  );
}

export default App;

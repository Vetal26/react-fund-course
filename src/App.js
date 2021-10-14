/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import PostFilter from './components/PostFilter.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyModal from './components/UI/MyModal/MyModal.jsx';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS8', body: 'Description' },
    { id: 2, title: 'jS2', body: 'Description4' },
    { id: 3, title: 'JS3', body: 'Description1' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS" />
    </div>
  );
}

export default App;

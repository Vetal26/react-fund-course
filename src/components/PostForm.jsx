import React, { useState } from 'react';
import MyInput from './UI/input/MyInput.jsx';
import MyButton from './UI/button/MyButton.jsx';

const PostForm = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    setPost({
      title: '',
      body: '',
    });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Title post"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description post"
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;

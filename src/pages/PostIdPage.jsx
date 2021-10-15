/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader.jsx';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;

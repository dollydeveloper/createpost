import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';
import { setEditPost } from '../redux/postSlice';
import './PostsDisplay.css';

const PostsDisplay = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (post) => {
    dispatch(setEditPost(post));
    navigate('/create');
  };

  return (
    <div className="posts-display">
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <PostItem key={post.id} post={post} onEdit={handleEdit} />
        ))
      ) : (
        <p className="no-posts">No posts available</p>
      )}
      <button onClick={() => navigate('/create')}>Create Post</button>
    </div>
  );
};

export default PostsDisplay;

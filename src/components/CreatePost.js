import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost, updatePost, setEditPost } from '../redux/postSlice';
import './CreatePost.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editPost = useSelector(state => state.posts.editPost);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const post = {
        id: editPost ? editPost.id : Date.now(),
        title,
        content,
      };
      if (editPost) {
        dispatch(updatePost(post));
      } else {
        dispatch(addPost(post));
      }
      dispatch(setEditPost(null));
      navigate('/');
    } else {
      setError('Title and content are required');
    }
  };

  return (
    <div className="create-post">
      <h1>{editPost ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <input
        className='title'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p className="error">{error}</p>}
        <button type="submit">{editPost ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CreatePost;

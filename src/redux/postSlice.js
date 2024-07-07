import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  editPost: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    setEditPost: (state, action) => {
      state.editPost = action.payload;
    },
  },
});

export const { addPost, updatePost, setEditPost } = postSlice.actions;
export default postSlice.reducer;

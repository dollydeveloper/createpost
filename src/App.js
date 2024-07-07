import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostsDisplay />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

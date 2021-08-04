import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from '@presentational/commentBox';
import CommentList from '@presentational/commentList';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <CommentBox></CommentBox>
        <CommentList></CommentList>
    </div>
  );
}

export default App;

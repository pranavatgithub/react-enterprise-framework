import React from 'react';
import logo from './logo.svg';
import './App.css';
// import  MenuContainer  from '@container/menuContainer';
import CommentBox from './components/presentational/commentBox';
import CommentList from './components/presentational/commentList';

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

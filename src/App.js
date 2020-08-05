import React from 'react';
import logo from './logo.svg';
import './App.css';
import  MenuContainer  from '@container/menuContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Well! A great FrameWork is in progress
          <MenuContainer></MenuContainer>
        </p>
      </header>
    </div>
  );
}

export default App;

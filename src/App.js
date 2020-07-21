import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Button  from '@uicomponents/presentational/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Well! A great FrameWork is in progress
          <Button></Button>
        </p>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  let [message, setMessage] = useState("");
  let [picture, setPicture] = useState("https://avatars.githubusercontent.com/u/107950608?v=4");

  return (
    <div className="App">
      <header className="App-header">
        <Home message={message} picture={picture}/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profilo from './model/Profilo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profilo /> {/* Includiamo il componente Profilo */}
      </header>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import './App.css';
import { Bubble } from './components/bubble';
import { Navbar } from './components/navbar'
import AppContext from './context/AppContext';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <p>Where do you think these Tokens are going?</p>
        <p>Up or Down?</p>
      </div>

      <div className='App-bubbles'>
        <Bubble ticker="BTC" />
        <Bubble ticker="ETH" />
        <Bubble ticker="SOL" />
      </div>
    </div>
  );
}

export default App;

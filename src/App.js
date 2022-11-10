import React from 'react';
import './App.css';
import { HomePage } from './pages/homePage/';
import { Navbar } from './components/navbar'

import "./App.css"
import { Button } from './components/button';
import { Bubble } from './components/bubble';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <p>Where do you think these Tokens are going?</p>
        <p>Up or Down?</p>
      </div>
      <div className='App-bubbles'>
        <Bubble ticker="BTC" sentiment="30%" />
        <Bubble ticker="ETH" sentiment="80%" />
        <Bubble ticker="LTC" sentiment="70%" />
      </div>
    </div>
  );
}

export default App;

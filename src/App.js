import React from 'react';
import './App.css';
import { Bubble } from './components/bubble';
import { Navbar } from './components/navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <p>Where do you think these Tokens are going?</p>
        <p>Up or Down?</p>
      </div>
      <div className='App-bubbles'>
        <Bubble ticker="BTC" sentiment="70"/>
        <Bubble ticker="ETH" sentiment="50"/>
        <Bubble ticker="LTC" sentiment="48"/>
      </div>
    </div>
  );
}

export default App;

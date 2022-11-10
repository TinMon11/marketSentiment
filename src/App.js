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
        <Bubble ticker="BTC" sentiment="70" bubbleColor='green' />
        <Bubble ticker="ETH" sentiment="50" bubbleColor='green' />
        <Bubble ticker="LTC" sentiment="5" bubbleColor='red' />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Bubble } from './components/bubble';
import { Navbar } from './components/navbar'
import swal from 'sweetalert';



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <p>Where do you think these Tokens are going?</p>
        <p>Up or Down?</p>
      </div>
      <div className='App-bubbles'>
        <Bubble ticker="XRP" sentiment="45" />
        <Bubble ticker="ETH" sentiment="30" />
        <Bubble ticker="LTC" sentiment="86" />
      </div>
    </div>
  );
}

export default App;

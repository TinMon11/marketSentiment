import React, { useContext } from 'react';
import './App.css';
import { Bubble } from './components/bubble';
import { Navbar } from './components/navbar'
import AppContext from './context/AppContext';


function App() {

  const { loginMetaMask } = useContext(AppContext)

  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <p>Where do you think these Tokens are going?</p>
        <p>Up or Down?</p>
      </div>

      {!loginMetaMask ?
        <div className='App-subtitle'>
          PLEASE LOGIN TO METAMASKT TO VIEW MARKET SENTIMENT
        </div>
        :
        <div className='App-bubbles'>
          <Bubble ticker="BTC" />
          <Bubble ticker="ETH" />
          <Bubble ticker="SOL" />
        </div>

      }
    </div>
  );
}

export default App;

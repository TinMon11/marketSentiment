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

      <div className='App-bubbles'>
        <Bubble ticker="BTC" />
        <Bubble ticker="ETH" />
        <Bubble ticker="SOL" />
      </div>
      {!loginMetaMask &&
        <div className='App-login-message'>
          <p>Please Login to Vote</p>
        </div>
      }

    </div>
  );
}

export default App;

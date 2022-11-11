import React from 'react'
import {useState} from 'react'
import LogoImage from "../../assets/images/ewol_logo.png";
import "./index.scss"


export const Navbar = () => {

  const [loginMetaMask, setloginMetaMask] = useState(false)

  const onHandleConnect = ()=> {
    setloginMetaMask(!loginMetaMask)
  }

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <img src={LogoImage} className='navbar-brand-logo' alt="ewolLogo"></img>
        <p>Market Sentiment App</p>
      </div>
      <div>
        <button onClick={onHandleConnect} className='navbar-loginbutton'>
          {loginMetaMask ? "Wallet Connected" : "Connect Metamask"}
        </button>
      </div>
    </div>
  )
}

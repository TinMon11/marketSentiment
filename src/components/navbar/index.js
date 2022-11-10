import React from 'react'
import LogoImage from "../../assets/images/ewol_logo.png";
import "./index.css"


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
        <img src={LogoImage} className='navbar-brand-logo' alt="ewolLogo"></img>
        <p>Market Sentiment App</p>
        </div>
        <div>
          <button className='navbar-loginbutton'>Metamask Connect</button>
        </div>
    </div>
  )
}

import React, { useContext } from 'react'
import LogoImage from "../../assets/images/ewol_logo.png";
import "./index.scss"
import AppContext from '../../context/AppContext'

export const Navbar = () => {

  const { loginMetaMask, user, conectMetamask } = useContext(AppContext)

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <img src={LogoImage} className='navbar-brand-logo' alt="ewolLogo"></img>
        <p>Market Sentiment App</p>
      </div>
      <div className='navbar-connection'>
        {loginMetaMask ?
          <p>Wallet Connected: {user}</p>
          :
          <button onClick={conectMetamask} className='navbar-loginbutton' disabled={loginMetaMask}>
            Connect Metamask
          </button>
        }
      </div>
    </div>
  )
}

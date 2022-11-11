import React from 'react'
import { useState } from 'react'
import LogoImage from "../../assets/images/ewol_logo.png";
import "./index.scss"
import swal from 'sweetalert';
import { ethers } from "ethers";



export const Navbar = () => {

  const [loginMetaMask, setloginMetaMask] = useState(false)
  const [user, setUser] = useState()

 const onHandleConnect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const signerAddress = await signer.getAddress()
    setUser(signerAddress.substring(0,4)+"..."+signerAddress.substring(36))
    setloginMetaMask(!loginMetaMask)
  }

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <img src={LogoImage} className='navbar-brand-logo' alt="ewolLogo"></img>
        <p>Market Sentiment App</p>
      </div>
      <div className='navbar-connection'>
        <p>{user}</p>
        <button onClick={onHandleConnect} className='navbar-loginbutton' disabled={loginMetaMask}>
          {loginMetaMask ? "Connected" : "Connect Metamask"}
        </button>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import AppContext from './AppContext';
const {abi} = require('../data/abi/MarketSentiment.json')

const contractAddr = '0xd17456c08328373d96C2Ce91CB6a0A8a9ba4Cc97'
let ethProvider;
let ethSigner;
let ethAccount;
let marketSentimentInstance = new ethers.Contract(contractAddr,
    abi)

const AppContextProvider = ({ children }) => {
    
    const [loginMetaMask, setloginMetaMask] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        window.localStorage.setItem("user_address", JSON.stringify(user));
      }, [user, loginMetaMask]);


    function conectMetamask() {
        const connectPromise = window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
        console.log('connectPromise', connectPromise)
        return connectPromise
    }

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    async function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
            return false
        } else {
            ethProvider = new ethers.providers.Web3Provider(window.ethereum)
            ethAccount = accounts[0]
            ethSigner = ethProvider.getSigner()
            marketSentimentInstance = new ethers.Contract(contractAddr,
                abi, ethSigner)
            window.ethProvider = ethProvider
            window.ethSigner = ethSigner
            setUser(ethAccount.substring(0, 5) + "..." + ethAccount.substring(35))
            setloginMetaMask(!loginMetaMask)
            return {
                account: ethAccount,
                network: await ethProvider.getNetwork()
            }
        }
    }
    
    return (
        <AppContext.Provider value={{ loginMetaMask, setloginMetaMask, user, setUser, conectMetamask, marketSentimentInstance}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
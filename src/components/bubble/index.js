import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { Button } from '../button'
import "./index.css"


export const Bubble = (props) => {

    const [sentimentText, setsentimentText] = useState()

    const ticker = props.ticker;

    const { loginMetaMask, marketSentimentInstance } = useContext(AppContext)

    const bubbleStyle = {
        marginTop: `${100 - sentimentText}%`,
        backgroundColor: (sentimentText >= 50 ? "green" : "red"),
    }

    const bubbleCircleStyle = {
        boxShadow: `0 0 30px ${(sentimentText >= 50 ? "green" : "red")}`
    }


    const getMarketSentiment = async (ticker) => {

        if (!marketSentimentInstance) { return null }
        const [_votesFor, _votesAgainst, _totalVotes] = await marketSentimentInstance.countVotes(ticker);

        // Only computes and displays sentiment if votes are more than zero, so
        if (_totalVotes > 0) {
            let perc = Math.round((_votesFor / _totalVotes) * 100)
            setsentimentText(perc)
        }
    }

    getMarketSentiment(ticker);

    return (
        <div className='bubble-modal' >
            <div className='bubble-circle' style={bubbleCircleStyle}>
                <div className='wave' style={bubbleStyle}></div>
                <div className='bubble-circle-sentiment'>{sentimentText}%</div>
            </div>
            <div className='bubble-buttons'>
                <Button className="buttonUp" disabled={!loginMetaMask} onClick={() => marketSentimentInstance.voteTicker(ticker, true)}>UP</Button>
                <Button className="buttonDown" disabled={!loginMetaMask} onClick={() => marketSentimentInstance.voteTicker(ticker, false)}>DOWN</Button>
            </div>
            <p className='bubble-circle-ticker'>{ticker}</p>
        </div>
    )
}

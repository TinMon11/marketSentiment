import React from 'react'
import { Button } from '../button'
import "./index.css"


export const Bubble = (props) => {

    const bubbleStyle = {
        marginTop: `${100 - props.sentiment}%`,
        backgroundColor: (props.sentiment>=50 ? "green" : "red"),
    }

    const bubbleCircleStyle = {
        boxShadow: `0 0 30px ${(props.sentiment>=50 ? "green" : "red")}`
    }

    return (
        <div className='bubble-modal' >
            <div className='bubble-circle' style={bubbleCircleStyle}>
                <div className='wave' style={bubbleStyle}></div>
                <div className='bubble-circle-sentiment'>{props.sentiment}%</div>
            </div>
            <div className='bubble-buttons'>
                <Button className="buttonUp">UP</Button>
                <Button className="buttonDown">DOWN</Button>
            </div>
            <p className='bubble-circle-ticker'>{props.ticker}</p>

        </div>)
}

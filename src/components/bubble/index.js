import React from 'react'
import { Button } from '../button'
import "./index.css"

export const Bubble = (props) => {
    return (
        <div className='bubble-modal' >
            <div className='bubble-circle'>
                <p className='bubble-circle-sentiment'>{props.sentiment}</p>
            </div>
            <p className='bubble-circle-ticker'>{props.ticker}</p>
            <div className='bubble-buttons'>
                <Button className="buttonUp">UP</Button>
                <Button className="buttonDown">DOWN</Button>
            </div>

        </div>)
}

import React from 'react'
import {RiArrowUpSFill} from 'react-icons/ri'
import './CoinItem.css'

const CoinItem = ({percent, price, image, color}) => {
    return (
        <div className="wrapper">
            <img src={image} alt="image" width={45} height={45} />
            <p>{price}</p>
            <p style={{color : color}} className="percent"><RiArrowUpSFill style={{marginRight: 5}} />  {percent}</p>
        </div>
    )
}

export default CoinItem

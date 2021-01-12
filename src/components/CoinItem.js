import React, {useState} from 'react'
import {RiArrowUpSFill} from 'react-icons/ri'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'
import './CoinItem.css'

import {Link} from 'react-router-dom'


const CoinItem = ({coin, deleteCoin}) => {
    return (
        <Link to={{
            pathname: `/coins/${coin.id}`,
            state: {
                data: coin
            }
        }} className="wrapper">
        <div className="wrapper">
                <img src={coin.image} alt="image" width={45} height={45} />
                <p>{coin.name}</p>
                    <p>{coin.current_price}</p>
                    <p style={{color : coin.price_change_percentage_24h > 0 ? "green" : "red"}} className="percent">
                        <span>{coin.price_change_percentage_24h > 0 ? <RiArrowUpSFill /> : <AiOutlineCaretDown />}</span>
                        {coin.price_change_percentage_24h}
                        <TiDelete className="delete" onClick={(e) => {
                            e.preventDefault()
                            deleteCoin(coin.id)
                        }} />
                    </p>
        </div>
        </Link>
    )
}

export default CoinItem

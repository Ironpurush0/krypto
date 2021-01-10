import React from 'react'
import './CoinData.css'

const CoinData = ({data}) => {
    const {detail} = data
    console.log(detail)

    return (
        <div className="detail-container">
            I am coin data
        </div>
    )
}

export default CoinData

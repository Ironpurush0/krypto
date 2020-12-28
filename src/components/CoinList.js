import React, {useState, useEffect}from 'react'
import CoinGecko from '../api'

import './CoinList.css'

import CoinItem from './CoinItem'

const CoinList = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await CoinGecko.get("/coins/markets", {
                params:{
                    vs_currency: "usd",
                    id: "bitcoin"
                },
                
            })

            console.log(res)
        }

        fetchData()
    }, [])
    
    return (
        <div className="list-container">
            <CoinItem />
        </div>
    )
}

export default CoinList

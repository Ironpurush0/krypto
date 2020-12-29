import React, {useState, useEffect, useContext}from 'react'
import CoinGecko from '../api'

import './CoinList.css'

import CoinItem from './CoinItem'
import { WatchListContext } from '../context/WatchListContext'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {watchList} = useContext(WatchListContext)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const res = await CoinGecko.get("/coins/markets/", {
                params:{
                    vs_currency: "usd",
                    ids: watchList.join(",")
                },
                
            })

            console.log(res.data)
            setCoins(res.data)
            setIsLoading(false)
        }

        fetchData()
    }, [])

    if(isLoading){
        return <p>LOADING</p>
    }
    
    return (
        <div className="list-container">
            {
                coins.map(coin => (
                    <CoinItem percent={coin.market_cap_change_percentage_24h} color={coin.market_cap_change_percentage_24h > 0 ? "green" : "red"} price={coin.current_price} image={coin.image} />
                ))
            }
        </div>
    )
}

export default CoinList

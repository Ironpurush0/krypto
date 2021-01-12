import React, {useState, useEffect, useContext}from 'react'
import CoinGecko from '../api'
import './CoinList.css'

import CoinItem from './CoinItem'
import { WatchListContext } from '../context/WatchListContext'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {watchList, deleteCoin, currencies} = useContext(WatchListContext)

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

        if(watchList.length > 0){
            fetchData()
        } else {
        setCoins([])
        }
        
    }, [watchList])

    if(!watchList.length){
        return <p>No Coins to show.</p>
    }


    if(isLoading){
        return <p>LOADING</p>
    }
    
    return (
        <div className="list-container">
            {
                coins.map(coin => (
                        <CoinItem key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                ))
            }
        </div>
    )
}

export default CoinList

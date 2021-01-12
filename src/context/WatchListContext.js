import React, {createContext, useState, useEffect} from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = props => {
    console.log(localStorage.getItem("Coin").split(","))
    const [watchList, setWatchList] = useState(localStorage.getItem("Coin").split(","))

    const currencies = ["usd", "inr", "aud", "eur"]

    useEffect(() => {
        localStorage.setItem("Coin", watchList)
    }, [watchList])

    const deleteCoin = coin => {
        setWatchList(watchList.filter(el => el !== coin))
    }

    const addCoin = coin => {
        if(watchList.indexOf(coin) === -1){
            setWatchList([...watchList, coin])
        }
    }

    return (
        <WatchListContext.Provider value={{watchList, deleteCoin, addCoin, currencies}}>
            {props.children}
        </WatchListContext.Provider>
    )
}
    

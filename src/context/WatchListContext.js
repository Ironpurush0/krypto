import React, {createContext, useState} from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(["bitcoin", "ripple", "cardano", "tether", "ethereum"])

    const deleteCoin = coin => {
        setWatchList(watchList.filter(el => el !== coin))
    }

    return (
        <WatchListContext.Provider value={{watchList, deleteCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
}
    

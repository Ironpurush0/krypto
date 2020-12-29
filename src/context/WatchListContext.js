import React, {createContext, useState} from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(["bitcoin", "ripple", "cardano", "tether", "ethereum"])

    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}
    

import React from 'react'
import './Home.css'

import CoinList from '../components/CoinList'
import AddCoin from '../components/AddCoin'
import AddCurrency from '../components/AddCurrency'

const Home = () => {
    return (
        <div className="container">
            <div className="coin-currency">
                <AddCoin />
                {/* <AddCurrency /> */}
            </div>
            <CoinList />
        </div>
    )
}

export default Home

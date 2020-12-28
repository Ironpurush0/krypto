import React from 'react'
import './Home.css'

import CoinList from '../components/CoinList'

const Home = () => {
    return (
        <div className="container">
            <button className="button">Add coin</button>
            <CoinList />
        </div>
    )
}

export default Home

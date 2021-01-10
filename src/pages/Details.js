import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import GrapChart from '../components/GrapChart'
import CoinData from '../components/CoinData'

import coinGecko from '../api'

import './Details.css'

const Details = () => {
    const [chartData, setChartData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const formatData = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1].toFixed(2)
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const [days, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 1,
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 7,
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 365,
                    }
                }),
                coinGecko.get(`/coins/markets`, {
                    params: {
                        vs_currency: "usd",
                        ids: id,
                    }
                })
            ])
            setChartData({
                days: formatData(days.data.prices), 
                week: formatData(week.data.prices), 
                year: formatData(year.data.prices), 
                detail: detail.data[0]})
            setIsLoading(false)
        }

        fetchData()
    }, [])

    console.log(chartData)

    if(isLoading){
        return <h1 style={{color: "white"}}>Loading...</h1>
    }
    
    return (
        <div className="graphContainer">
            <GrapChart data={chartData} />
            <div className="metaInfoContainer">
                <div className="buttonContainer">
                    <button className="btn">1d</button>
                    <button className="btn">7d</button>
                    <button className="btn">1y</button>
                </div>
                <div className="priceTracker">
                    <h1>{chartData.detail.current_price.toFixed(2)} $</h1>
                    <p 
                        style={
                            {
                                fontSize: "20px", 
                                color: chartData.detail.price_change_24h < 0 ? "red" : "green"}}>
                                    {chartData.detail.price_change_24h.toFixed(2)} %
                    </p>
                </div>
            </div>
            <CoinData data={chartData} />
        </div>
    )
}

export default Details

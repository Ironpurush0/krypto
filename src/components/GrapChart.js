import React, {useEffect, useRef, useState} from 'react'
import Chartjs from 'chart.js'
import './GraphChart.css'

import {options} from './chartConfig'

const GrapChart = ({data}) => {
    const chartRef = useRef()
    const {days, week, year, detail} = data
    const [timeFormat, setTimeFormat] = useState("24h")

    const checkTimePeriod = () => {
        switch(timeFormat){
            case "24h":
                return days
            case "7d":
                return week
            case "1y":
                return year
            defeult:
            return "24h"
        }
    }

    useEffect(() => {
        if((chartRef && chartRef.current && detail)){
            const myChart = new Chartjs(chartRef.current, {
                type: "line",
                data: {
                    datasets: [{
                        label: `${detail.name} price`,
                        data: checkTimePeriod(),
                        backgroundColor: "rgba(68, 68, 155, 0.1)",
                        borderColor: "#44449B",
                        pointRadius: 5,
                        pointBackgroundColor: "#1181B2",
                    }]
                },
                options: {
                    ...options
                }
            })
        }
    })

    return (
        <>
            <div className="graph-Container">
                <canvas ref={chartRef} id="myChart">
                </canvas>
            </div>
            <div className="metaInfoContainer">
            <div className="buttonContainer">
                <button className="btn" onClick={() => setTimeFormat("24h")}>1d</button>
                <button className="btn" onClick={() => setTimeFormat("7d")}>7d</button>
                <button className="btn" onClick={() => setTimeFormat("1y")}>1y</button>
            </div>
            <div className="priceTracker">
                <h1>{detail.current_price.toFixed(2)} $</h1>
                <p 
                    style={
                        {
                            fontSize: "20px", 
                            color: detail.price_change_24h < 0 ? "red" : "green"}}>
                                {detail.price_change_24h.toFixed(2)} %
                </p>
            </div>
        </div>
        </>
    )
}

export default GrapChart

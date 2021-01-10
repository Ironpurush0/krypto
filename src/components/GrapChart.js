import React, {useEffect, useRef} from 'react'
import Chartjs from 'chart.js'
import './GraphChart.css'

import {options} from './chartConfig'

const GrapChart = ({data}) => {
    const chartRef = useRef()
    const {days, week, year, detail} = data

    useEffect(() => {
        if((chartRef && chartRef.current && detail)){
            const myChart = new Chartjs(chartRef.current, {
                type: "line",
                data: {
                    datasets: [{
                        label: `${detail.name} price`,
                        data: days,
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
        <div className="graph-Container">
            <canvas ref={chartRef} id="myChart" width={250} height={250}>
            </canvas>
        </div>
    )
}

export default GrapChart

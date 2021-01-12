import React from 'react'
import './CoinData.css'

import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 10,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const CoinData = ({data}) => {
    const classes = useStyles()

    const {detail} = data
    console.log(detail)
    
    return (
        <div className="detail-container">
            <h1 style={{color: "#DDEDF4", fontWeight: 'normal'}}>{`${detail.name} Price and Market Stats`}</h1>
            <div className="item">
                <p style={{color: "#DDEDF4", display: "flex", flexDirection: "column"}}>
                    Market Cap
                    <span>{detail.market_cap}</span>
                </p>
                <p style={{display: "flex", flexDirection: "column"}}>
                    Market Cap change 24h
                    <span>{detail.market_cap_change_24h}</span>
                </p>
                <p style={{display: "flex", flexDirection: "column"}}>
                    Total Supply
                    <span>{detail.total_supply}</span>
                </p>
            </div>
            <div className="item">
                <p style={{display: "flex", flexDirection: "column"}}>
                    All time high
                    <span>{detail.ath}</span>
                </p>
                <p style={{display: "flex", flexDirection: "column"}}>
                    24h high / 24h low
                    <span>{`${detail.high_24h} / ${detail.low_24h}`}</span>
                </p>
                <p style={{display: "flex", flexDirection: "column"}}>
                    All time low
                    <span>{detail.atl}</span>
                </p>
            </div>
        </div>
    )
}

export default CoinData

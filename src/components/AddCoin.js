import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {WatchListContext} from '../context/WatchListContext'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const AddCoin = () => {
    const classes = useStyles();
    const [coin, setCoin] = useState('');
    const {addCoin} = useContext(WatchListContext)
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
      ];

    const handleChange = (event) => {
        event.preventDefault()
        setCoin(event.target.value);
    };

    return (
        <div>
            <FormControl style={{backgroundColor: "#44449B"}} variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Add Coin</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={coin}
          onChange={handleChange}
        >
          {
              availableCoins.map(el => (
                  <MenuItem value={el} onClick={() => addCoin(el)}>{el}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
        </div>
    )
}

export default AddCoin

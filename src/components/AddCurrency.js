import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
    const {currencies} = useContext(WatchListContext)
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <FormControl style={{backgroundColor: "#44449B"}} variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map(cur => (
              <MenuItem value={cur}>{cur}</MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
    )
}

export default AddCoin

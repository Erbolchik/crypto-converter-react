import React from 'react';
import { Paper, FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

type IConverterBlock = {
  classes: any;
};

export const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) => (
  <Paper className={classes.paper}>
    <div className={classes.cryptoInputBox}>
      <FormControl className={classes.currencyInput}>
        <TextField label="Сумма" />
      </FormControl>
      <FormControl className={classes.currencyType}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Валюта
        </InputLabel>
        <Select value={10}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className={classes.cryptoInputBox}>
      <FormControl className={classes.currencyInput}>
        <TextField type="number" value={1} label="Сумма" />
      </FormControl>
      <FormControl className={classes.currencyType}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Валюта
        </InputLabel>
        <Select value={1}>
          <MenuItem value="USD">USD</MenuItem>
        </Select>
      </FormControl>
    </div>
  </Paper>
);

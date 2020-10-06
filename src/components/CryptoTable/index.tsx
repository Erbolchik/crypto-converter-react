import React from 'react';

import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
  TableBody,
} from '@material-ui/core';
import { TCoin } from '../../types';

type ICryptoTable = {
  items: TCoin[];
  classes: any;
};

export const CryptoTable: React.FC<ICryptoTable> = ({ items, classes }) => (
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">FullName</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">volume24hour</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!items.length
          ? 'Загрузка...'
          : items.map((coin: TCoin) => (
              <TableRow key={coin.name}>
                <TableCell>
                  <img className={classes.currencyIcon} src={coin.imageUrl} alt="Coin icon" />
                </TableCell>
                <TableCell align="left">{coin.name}</TableCell>
                <TableCell align="left">{coin.fullName}</TableCell>
                <TableCell align="left">{coin.price}</TableCell>
                <TableCell align="left">${coin.volume24Hour}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  </TableContainer>
);

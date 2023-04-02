import React, {useReducer} from 'react';
import {Box, Table, TableBody, TableCell, TableRow} from '@mui/material';
import { styled } from '@mui/system' 
// import styled from '@emotion/styled';

import Rates from './CalculatorComponent/Rates/Index';
import Money from './CalculatorComponent/Money/Index';
import {IInput, InterestRatePageReducer} from './Reducer/Index';
import Period from './CalculatorComponent/Period/Index';
import Hold from './CalculatorComponent/Hold/Index';

const BorderedTable = styled(Table)({
  'td': {
    border : `1px solid`,
    borderColor: 'inherit'
  },
  boxSizing: 'content-box',
  width: 'auto'
})

const TableHead = ({children}) => {
  return <TableCell variant='head' sx={(theme)=>({
    background: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
    fontWeight: 500,
  })}>{children}</TableCell>
}

const CalculatorInput = () => {
  const initialState: IInput = {
    money: 0,
    rates: 0,
  };

  const [state, dispatch] = useReducer(InterestRatePageReducer, initialState);

  return (
    <Box>
      <BorderedTable
        sx={(theme) => ({borderColor: theme.palette.primary.dark})}
      >
        <TableBody>
          <TableRow>
            <TableHead>대출금</TableHead>
            <TableCell>
              <Money {...{state, dispatch}} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>대출금리</TableHead>
            <TableCell>
              <Rates {...{state, dispatch}} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>대출기간</TableHead>
            <TableCell>
              <Period {...{state, dispatch}} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>거치기간</TableHead>
            <TableCell>
              <Hold {...{state, dispatch}} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>상환방식</TableHead>
          </TableRow>
        </TableBody>
      </BorderedTable>
    </Box>
  );
};

export default CalculatorInput;

import React, {Dispatch} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {IInputReducer} from '../../Reducer/Index';

import {Button} from '@mui/material';
import ButtonsBox from './ButtonsBox';


const MoneyInputButtons = ({dispatch}: {dispatch: Dispatch<IInputReducer>}) => {
  return (
    <ButtonsBox>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {money: 100000}})}
      >
        십만원
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {money: 1000000}})}
      >
        백만원
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {money: 10000000}})}
      >
        천만원
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {money: 100000000}})}
      >
        일억원
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {money: 100000000}})}
      >
        일십억원
      </Button>
      <Button
        variant="contained"
        onClick={(_) => dispatch({value: {money: 0}, type: 'controlled'})}
        color="warning"
      >
        <DeleteIcon />
        초기화
      </Button>
    </ButtonsBox>
  );
};

export default MoneyInputButtons;

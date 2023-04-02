import React, { Dispatch } from 'react';
import { IInput, IInputReducer } from '../../Reducer/Index';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button} from '@mui/material';
import ButtonsBox from './ButtonsBox';

const PeriodButtons = ({dispatch}: {dispatch: Dispatch<IInputReducer>}) => {
  return (
    <ButtonsBox>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {period: 1}, type: ''})}
      >
        1개월
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {period: 6}, type: ''})}
      >
        6개월
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {period: 12}, type: ''})}
      >
        1년
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {period: 72}, type: ''})}
      >
        6년
      </Button>
      <Button
        variant="outlined"
        onClick={(_) => dispatch({value: {period: 120}, type: ''})}
        sx={{mr: 1, borderRadius: 1, padding: 0.3, width: 'fit-content'}}
      >
        10년
      </Button>
      <Button
        variant="contained"
        onClick={(_) => dispatch({value: {period: 0}, type: 'controlled'})}
        color="warning"
      >
        <DeleteIcon />
        초기화
      </Button>
    </ButtonsBox>
  );
};

export default PeriodButtons;
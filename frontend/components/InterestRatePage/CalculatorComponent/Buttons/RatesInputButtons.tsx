import React, {Dispatch} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IInputReducer } from '../../Reducer/Index';

import { Button } from '@mui/material';
import ButtonsBox from './ButtonsBox';
  

const RatesInputButtons = ({dispatch}: {dispatch: Dispatch<IInputReducer>}) => {
  return (
    <ButtonsBox>
        <Button variant="outlined"
            onClick={(_) => dispatch({value: {rates: 3}, type: 'controlled'})}
        >
            3%
        </Button>
        <Button variant="outlined"
            onClick={(_) => dispatch({value: {rates: 4}, type: 'controlled'})}
        >
            4%
        </Button>
        <Button
            variant="outlined"
            onClick={(_) => dispatch({value: {rates: 5}, type: 'controlled'})}
        >
            5%
        </Button>
        <Button
            variant="outlined"
            onClick={(_) => dispatch({value: {rates: 6}, type: 'controlled'})}
        >
            6%
        </Button>
        <Button
            variant="outlined"
            onClick={(_) => dispatch({value: {rates: 7}, type: 'controlled'})}
        >
            7%
        </Button>
        <Button
            variant="contained"
            onClick={(_) => dispatch({value: {rates: 0}, type: 'controlled'})}
            color='warning'
        >
            <DeleteIcon />
            초기화
        </Button>
        </ButtonsBox>
    );
}

export default RatesInputButtons;
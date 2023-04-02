import React, { Dispatch } from 'react';
import { Box, Input } from '@mui/material';
import RatesInputButtons from '../Buttons/RatesInputButtons';
import { IInput, IInputReducer } from '../../Reducer/Index';

const Rates = ({state, dispatch} : {state: IInput, dispatch: Dispatch<IInputReducer>})  => {
    return ( 
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box>
                <Input
                    type="number"
                    value={
                        state.rates
                    }
                    onChange={(e) => {
                    dispatch({
                        value: {rates: Number(e.target.value)},
                        type: 'controlled',
                    });
                    }}
                    sx = {{ mb: 0.5, width: '3rem' }}
                /> %
            </Box>
            <RatesInputButtons {...{dispatch}} />
        </Box>
    )
}

export default Rates;
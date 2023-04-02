import {Dispatch} from 'react';
import {IInput, IInputReducer} from '../../Reducer/Index';
import {Box, Button, Typography, Input, InputLabel} from '@mui/material';
import PeriodInputButtons from '../Buttons/PeriodInputButtons';
import {Label} from '@mui/icons-material';

const Period = ({
  state,
  dispatch,
}: {
  state: IInput;
  dispatch: Dispatch<IInputReducer>;
}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Input
          id="period-input"
          type="number"
          value={state.period}
          onChange={(e) => {
            dispatch({
              value: {period: Number(e.target.value)},
              type: 'controlled',
            });
          }}
          sx={{mb: 0.5, width: '3rem', display: 'inline-block'}}
        />
        <InputLabel sx={{ ml: 1 }} htmlFor="period-input"> 개월 </InputLabel>
      </Box>
      <Typography sx={{mb: 0.5}}>
        {new Intl.NumberFormat().format(state.period)} 개월
      </Typography>
      <PeriodInputButtons dispatch={dispatch} />
    </Box>
  );
};

export default Period;

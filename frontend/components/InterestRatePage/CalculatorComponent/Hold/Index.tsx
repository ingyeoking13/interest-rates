import React, { Dispatch } from "react";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IInput, IInputReducer } from "../../Reducer/Index";

const Hold = ({
        state,
        dispatch,
    }:{
    state: IInput;
    dispatch: Dispatch<IInputReducer>;
}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Input
        type="number"
            value={state.money}
            onChange={(e) => {
          dispatch({
            value: {money: Number(e.target.value)},
            type: 'controlled',
          });
        }}
        sx={{mb: 0.5, width: '8rem'}}
      />
      <Typography sx={{mb: 0.5}}>
        {new Intl.NumberFormat().format(state.money)} 원
      </Typography>
    </Box>
  );
}

export default Hold;
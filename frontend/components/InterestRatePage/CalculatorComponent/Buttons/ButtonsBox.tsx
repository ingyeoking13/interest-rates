import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonsBox = styled(Box)({
    'button': {
        fontSize: '0.8rem',
        padding: '0.1rem',
        marginRight: '0.2rem',
    }
});


const ButtonsBox =({children}) =>{
    return <StyledButtonsBox>{children}</StyledButtonsBox>
}

export default ButtonsBox;


import React from 'react';
import NextLink from 'next/link';
import {Button, Typography} from '@mui/material';

const HeaderComponent = () => {
  return (
    <header>
      <NextLink href='/'>
        <Button>이자 계산기</Button>
      </NextLink>
    </header>
  );
};

export default HeaderComponent;

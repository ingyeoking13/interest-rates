import React from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.css';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/header/FooterComponent';

import Calculator from '../components/InterestRatePage/CalculcatorTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, teal, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green
  }
})

const Home = ({props}) => {
  const getLayOut = ({}) =>{
    return <Calculator />
  }

  return (
    <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <HeaderComponent />
      <Head>
        <title>이자계산기</title>
        <meta name="description" content="당신이 더 현명하게 자산을 관리할 수 있도록 도와드리겠습니다." />
        <meta name="description" content="이자를 계산하고 지출을 예측하여 더 현명하게 소비하세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          getLayOut({})
        }
      </main>
      <FooterComponent />
    </div>
</ThemeProvider>
  );
}

export default Home;
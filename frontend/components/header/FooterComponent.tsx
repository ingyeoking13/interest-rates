import React from 'react';
import Image from 'next/image'

import { Typography } from '@mui/material';
import styles from 'styles/Home.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}> 
        <Typography>
          계산기는 자유롭게 사용하실 수 있습니다. <br />
          당신이 더 현명하게 자산을 관리할 수 있도록 도와드리겠습니다. <br />
          이자를 계산하고 가처분소득을 예측하여 더 현명하게 소비하세요. <br />
        </Typography>
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    )
}

export default Footer;
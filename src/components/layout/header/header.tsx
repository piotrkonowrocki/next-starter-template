import React, {VFC} from 'react';
import Image from 'next/image';

import nextJsLogo from 'assets/nextjs-logo.svg';
import styles from './header.module.scss';

const Header: VFC = () => (
  <header className={styles['main-header']}>
    <Image
      src={nextJsLogo}
      alt="Next.js logo"
    />
    <h1>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  </header>
);

export default Header;

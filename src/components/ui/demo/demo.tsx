import React, {VFC} from 'react';
import Image from 'next/image';

import nextJsLogo from 'assets/nextjs-logo.svg';
import styles from './demo.module.scss';

export const DemoHeader: VFC = () => (
  <div className={`${styles['demo-container']} ${styles['demo-container--header']}`}>
    <Image
      src={nextJsLogo}
      alt="Next.js logo"
    />
    <h1 className={styles['demo-title']}>
      Welcome to <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js!</a>
    </h1>
  </div>
);

export const DemoContent: VFC = () => (
  <div className={styles['demo-container']}>
    <p>Get started by editing <code className={styles['demo-code']}>/pages/index.tsx</code></p>
    <p>
      Start developing your own website with deleting files associated with demo component in{' '}
      <code className={styles['demo-code']}>/src/components/ui/demo/</code>{' '}
      directory.
    </p>
    <p>
      Visit projects{' '}
      <a href="https://github.com/piotrkonowrocki/next-starter-template" target="_blank" rel="noreferrer">Github page</a>{' '}
      to find out more about this template.
    </p>
    <p>
      To learn more about{' '}
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>,{' '}
      take a look at the following resources:
    </p>
    <ul>
      <li>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">{' '}
        Next.js Documentation</a> - learn about Next.js features and API.
      </li>
      <li>
        <a href="https://nextjs.org/learn" target="_blank" rel="noreferrer">{' '}
        Learn Next.js</a> - an interactive Next.js tutorial.
      </li>
    </ul>
  </div>
);

export const DemoFooter: VFC = () => (
  <div className={`${styles['demo-container']} ${styles['demo-container--footer']}`}>
    Piotr Konowrocki 2021
  </div>
);

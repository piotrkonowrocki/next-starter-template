import React, {VFC} from 'react';

import styles from './footer.module.scss';

const Footer: VFC = () => (
  <footer className={styles['main-footer']}>
    Piotr Konowrocki 2021
  </footer>
);

export default Footer;

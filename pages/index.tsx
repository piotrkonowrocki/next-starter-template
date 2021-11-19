import React from 'react';
import type {NextPage} from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.scss';

import MasterPage from 'components/masterpages/masterpage';

const Home: NextPage = () => {
  return (
    <MasterPage cssClass="asd">
      <p>lorem ipsum</p>
    </MasterPage>
  );
};

export default Home;

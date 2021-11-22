import React from 'react';
import {NextPage} from 'next';

import MasterPage from 'components/masterpages/masterpage';

const Home: NextPage = () => {
  return (
    <MasterPage>
      <p>Get started by editing <code>/pages/index.tsx</code></p>
      <p>
        Visit projects{' '}
        <a href="https://github.com/piotrkonowrocki/next-starter-template" target="_blank" rel="noreferrer">Github page</a>{' '}
        to learn more about this template.
      </p>
      <p>To learn more about Next.js, take a look at the following resources:</p>
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
    </MasterPage>
  );
};

export default Home;

import React, {FC, ReactNode} from 'react';
import Head from 'next/head';
import classnames from 'classnames';

import {siteName} from 'dictionaries/site.dictionary';
import DefaultMasterpage from './default.masterpage';
import EmptyMasterpage from './empty.masterpage';

interface IMasterPageProps {
  template?: 'default' | 'empty'
  title?: string
  subtitle?: string | string[]
  cssClass?: string | string[]
  children: ReactNode
}

const MasterPage: FC<IMasterPageProps> = ({template = 'default', title = siteName, subtitle, cssClass, children}) => {
  return (
    <>
      <Head>
        <title>
          {subtitle && `${Array.isArray(subtitle) ? subtitle.join(' - ') : subtitle} - `}
          {title}
        </title>
        <meta name="description" content="Generated by create next app" key="meta-description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classnames('main-container', cssClass)}>
        {
          {
            default: <DefaultMasterpage>{children}</DefaultMasterpage>,
            empty: <EmptyMasterpage>{children}</EmptyMasterpage>
          }[template]
        }
      </main>
    </>
  );
};

export default MasterPage;
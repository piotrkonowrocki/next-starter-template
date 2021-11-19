import React, {FC} from 'react';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

interface IDefaultMasterpageProps {
  children: React.ReactNode
}

const DefaultMasterpage: FC<IDefaultMasterpageProps> = ({children}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default DefaultMasterpage;

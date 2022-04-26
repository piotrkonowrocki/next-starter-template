import React, {FC} from 'react'

import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'

interface IDefaultMasterpageProps {
  children: React.ReactNode
}

const DefaultMasterpage: FC<IDefaultMasterpageProps> = ({children}) => (
  <>
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </>
)

export default DefaultMasterpage

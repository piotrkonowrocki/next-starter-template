import React from 'react'
import {Global} from '@emotion/react'
import {AppProps} from 'next/app'

import {base} from '@/app/styles/base.style'
import {text} from '@/app/styles/text.style'

import '@/app/styles/vendors.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Global styles={[base, text]} />
      <Component {...pageProps} />
    </>
  )
}

export default App

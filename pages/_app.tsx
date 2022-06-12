import React from 'react'
import {Global} from '@emotion/react'
import {AppProps} from 'next/app'

import {EffortlessThemeProvider} from '@/effortless-ui/contexts'
import {base} from '@/styles/base.style'
import {effortlessTheme} from '@/styles/effortless.theme'
import {text} from '@/styles/text.style'

import '@/styles/vendors.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <EffortlessThemeProvider theme={effortlessTheme}>
      <Global styles={[base, text]} />
      <Component {...pageProps} />
    </EffortlessThemeProvider>
  )
}

export default App

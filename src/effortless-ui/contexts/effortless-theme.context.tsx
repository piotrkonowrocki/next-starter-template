import React, {createContext, FC, ReactNode} from 'react'

import {CSObject, EffortlessThemeComponentsTypes} from '@/effortless-ui/types'

export type TEffortlessTheme = {
  [k in EffortlessThemeComponentsTypes]?: {
    [i in keyof JSX.IntrinsicElements]?: CSObject
  }
}

interface IEffortlessThemeContextProps {
  theme?: TEffortlessTheme
  children?: ReactNode
}

export const EffortlessThemeContext = createContext<IEffortlessThemeContextProps>({})

export const EffortlessThemeProvider: FC<IEffortlessThemeContextProps> = ({theme, children}) => {
  const state = {theme}

  return <EffortlessThemeContext.Provider value={state}>{children}</EffortlessThemeContext.Provider>
}

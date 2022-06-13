import React, {createContext, FC, ReactNode} from 'react'

import {CSObject, EffortlessThemeComponentsTypes} from '@/effortless-ui/types'

export interface TEffortlessTheme {
  gutter?: {
    x?: number
    y?: number
  }
  variants?: {
    [k in EffortlessThemeComponentsTypes]?: {
      [i in keyof JSX.IntrinsicElements]?: CSObject
    }
  }
}

interface IEffortlessThemeContextProps {
  theme?: TEffortlessTheme
  children?: ReactNode
}

const defaultEffortlessTheme: TEffortlessTheme = {
  gutter: {
    x: 16,
    y: 16,
  },
}

export const EffortlessThemeContext = createContext<IEffortlessThemeContextProps>({})

export const EffortlessThemeProvider: FC<IEffortlessThemeContextProps> = ({theme, children}) => {
  const state = {theme: theme ?? defaultEffortlessTheme}

  return <EffortlessThemeContext.Provider value={state}>{children}</EffortlessThemeContext.Provider>
}

import {TEffortlessTheme} from '@/effortless-ui/contexts'

import {theme} from './theme'

export const effortlessTheme: TEffortlessTheme = {
  gutter: {
    x: 16,
    y: 16,
  },
  tags: {
    Text: {
      p: {
        m: 0,
        fontSize: theme.font.size.base,
      },
    },
  },
  variants: {
    Button: {
      primary: {
        border: 'none',
        p: 0,
      },
    },
    Text: {
      'main-header': {
        fontSize: 40,
      },
    },
  },
}

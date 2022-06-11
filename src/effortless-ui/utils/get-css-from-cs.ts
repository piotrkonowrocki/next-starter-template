import {CSSObject} from '@emotion/react'

import {CsObject} from '@/effortless-ui/types'
import {csToCssMap} from '@/effortless-ui/utils'

export const getCssFromCs = (cs: CsObject = {}): CSSObject => {
  let css: CSSObject = {}

  for (const [key, value] of Object.entries(cs)) {
    if (Object.keys(csToCssMap).includes(key)) css = {...csToCssMap[key](value), ...css}
    else css[key] = value
  }

  return css
}

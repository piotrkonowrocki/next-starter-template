import {CSSObject} from '@emotion/react'

import {CSAliases, CSObject} from '@/effortless-ui/types'
import {transformCSValue} from '@/effortless-ui/utils'

export const transformCSProperty = (cs: CSObject): CSObject => {
  if (Array.isArray(cs)) {
    return cs.map((item) => {
      return transformCSProperty(item)
    })
  } else {
    let styles: CSSObject = {}

    for (const [key, value] of Object.entries(cs)) {
      const property = key as keyof CSAliases
      const style = typeof value === 'object' ? transformCSProperty(value) : value

      if (Object.keys(transformCSValue).includes(key)) styles = {...transformCSValue[property](style), ...styles}
      else styles[key] = style
    }

    return styles
  }
}

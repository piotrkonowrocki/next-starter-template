import {CSSObject} from '@emotion/react'

const csToCssMapDefault = (property: string, value: string): CSSObject => {
  return {[property]: value}
}

export const csToCssMap: {[key: string]: (value: string) => CSSObject} = {
  bg: (value): CSSObject => csToCssMapDefault('background', value),
  bc: (value): CSSObject => csToCssMapDefault('background-color', value),
  m: (value): CSSObject => csToCssMapDefault('margin', value),
  mx: (value): CSSObject => {
    return {
      marginRight: value,
      marginLeft: value,
    }
  },
  my: (value): CSSObject => {
    return {
      marginTop: value,
      marginBottom: value,
    }
  },
  mt: (value): CSSObject => csToCssMapDefault('marginTop', value),
  mr: (value): CSSObject => csToCssMapDefault('marginRight', value),
  mb: (value): CSSObject => csToCssMapDefault('marginBottom', value),
  ml: (value): CSSObject => csToCssMapDefault('marginLeft', value),
  p: (value): CSSObject => csToCssMapDefault('padding', value),
  px: (value): CSSObject => {
    return {
      marginRight: value,
      marginLeft: value,
    }
  },
  py: (value): CSSObject => {
    return {
      marginTop: value,
      marginBottom: value,
    }
  },
  pt: (value): CSSObject => csToCssMapDefault('paddingTop', value),
  pr: (value): CSSObject => csToCssMapDefault('paddingRight', value),
  pb: (value): CSSObject => csToCssMapDefault('paddingBottom', value),
  pl: (value): CSSObject => csToCssMapDefault('paddingLeft', value),
}

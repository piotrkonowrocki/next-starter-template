import {CSSObject} from '@emotion/react'
import * as CSS from 'csstype'

type CSSProperties = CSS.Properties<number | string>

export interface CsAliases {
  bg?: CSSProperties['background']
  bc?: CSSProperties['backgroundColor']
  m?: CSSProperties['margin']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginTop']
  mt?: CSSProperties['marginTop']
  mr?: CSSProperties['marginRight']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  p?: CSSProperties['padding']
  px?: CSSProperties['paddingRight']
  py?: CSSProperties['paddingTop']
  pt?: CSSProperties['paddingTop']
  pr?: CSSProperties['paddingRight']
  pb?: CSSProperties['paddingBottom']
  pl?: CSSProperties['paddingLeft']
}

export type CsObject = CSSObject | CsAliases

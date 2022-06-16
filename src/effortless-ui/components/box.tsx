import React, {forwardRef} from 'react'

import {useEffortlessTheme} from '@/effortless-ui/hooks'
import {ComponentCompositions, CSObject} from '@/effortless-ui/types'
import {castToArray, getCompositionStyles} from '@/effortless-ui/utils'

import {Boilerplate, TBoilerplateProps} from './boilerplate'

type AllowedCompositions = 'gridAutoCols' | 'gridAutoRows' | 'flex' | 'flexColumn' | 'flexItemsCenter' | 'flexSpaceBetween' | 'list'

interface IBoxProps {
  composition?: AllowedCompositions | AllowedCompositions[]
}

const compositions: ComponentCompositions<AllowedCompositions> = {
  gridAutoCols: {
    display: 'grid',
    alignItems: 'start',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
  },
  gridAutoRows: {
    display: 'grid',
  },
  flex: {display: 'flex'},
  flexColumn: {flexDirection: 'column'},
  flexItemsCenter: {alignItems: 'center'},
  flexSpaceBetween: {justifyContent: 'space-between'},
  list: {m: 0, p: 0, listStyle: 'none'},
}
const compositionsWithGutter: AllowedCompositions[] = ['gridAutoCols', 'gridAutoRows']

export const Box = forwardRef<unknown, TBoilerplateProps<'div'> & IBoxProps>((props, ref) => {
  const {theme} = useEffortlessTheme()

  const {composition, cs, ...rest} = props

  const styles: CSObject[] = [
    ...(composition ? [getCompositionStyles<AllowedCompositions>(composition, compositions)] : []),
    ...(composition && castToArray<AllowedCompositions>(composition).some((item) => compositionsWithGutter.includes(item))
      ? [
          {
            columnGap: theme?.gutter?.x,
            rowGap: theme?.gutter?.y,
          },
        ]
      : []),
    ...(cs ? [cs] : []),
  ]

  return <Boilerplate cs={styles} from="Box" ref={ref} {...rest} />
})

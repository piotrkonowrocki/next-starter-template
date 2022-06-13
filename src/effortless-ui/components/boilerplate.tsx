import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'
import {css} from '@emotion/react'

import {useEffortlessTheme} from '@/effortless-ui/hooks'
import {Assign, CSObject, EffortlessThemeComponentsTypes} from '@/effortless-ui/types'
import {transformCSProperty} from '@/effortless-ui/utils'

interface IBoilerplateProps {
  cs?: CSObject
  from?: EffortlessThemeComponentsTypes
  tag?: ElementType
}

export type TBoilerplateProps = Omit<Assign<ComponentPropsWithRef<'div'>, IBoilerplateProps>, 'ref'>

export const Boilerplate = forwardRef<unknown, TBoilerplateProps>((props, ref) => {
  const {theme} = useEffortlessTheme()

  const {tag = 'div', cs, from, ...rest} = props
  const Component = tag

  const styles: CSObject[] = []
  const themeTag = tag as keyof JSX.IntrinsicElements

  if (cs) styles.push(transformCSProperty(cs))
  if (from && theme?.variants?.[from]?.[themeTag]) styles.push(transformCSProperty(theme.variants[from]?.[themeTag]))

  const allProps = {
    ref,
    ...(styles.length && {css: css(styles)}),
    ...rest,
  }

  return <Component {...allProps} />
})

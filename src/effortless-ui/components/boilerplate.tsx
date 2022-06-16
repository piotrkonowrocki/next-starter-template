import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'
import {css} from '@emotion/react'

import {useEffortlessTheme} from '@/effortless-ui/hooks'
import {Assign, CSObject, EffortlessThemeComponentsTypes} from '@/effortless-ui/types'
import {transformCSProperty} from '@/effortless-ui/utils'

interface IBoilerplateProps {
  cs?: CSObject
  from?: EffortlessThemeComponentsTypes
  tag?: ElementType
  variant?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TBoilerplateProps<T extends ElementType> = Omit<Assign<ComponentPropsWithRef<T>, IBoilerplateProps>, 'ref'>

export const Boilerplate = forwardRef<unknown, IBoilerplateProps>((props, ref) => {
  const {theme} = useEffortlessTheme()

  const {cs, from, tag = 'div', variant, ...rest} = props
  const Component = tag

  const themeTag = tag as keyof JSX.IntrinsicElements
  const styles: CSObject[] = [
    ...(from && theme?.tags?.[from]?.[themeTag] ? [transformCSProperty(theme.tags[from]?.[themeTag])] : []),
    ...(from && variant && theme?.variants?.[from]?.[variant] ? [transformCSProperty(theme.variants[from]?.[variant])] : []),
    ...(cs ? [transformCSProperty(cs)] : []),
  ]
  const allProps = {
    ref,
    ...(styles.length && {css: css(styles)}),
    ...rest,
  }

  return <Component {...allProps} />
})

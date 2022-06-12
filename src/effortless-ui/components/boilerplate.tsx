import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'
import {css} from '@emotion/react'

import {Assign, CSObject} from '@/effortless-ui/types'
import {transformCSProperty} from '@/effortless-ui/utils'

interface IBoilerplateProps {
  as?: ElementType
  cs?: CSObject
}

type TBoilerplateProps = Omit<Assign<ComponentPropsWithRef<'div'>, IBoilerplateProps>, 'ref'>

export const Boilerplate = forwardRef<unknown, TBoilerplateProps>((props, ref) => {
  const {as: Component = 'div', cs, ...rest} = props
  const allProps = {
    ref,
    ...(cs && {css: css(transformCSProperty(cs))}),
    ...rest,
  }

  return <Component {...allProps} />
})

import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'

import {Assign, CsObject} from '@/effortless-ui/types'
import {getCssFromCs} from '@/effortless-ui/utils'

interface IBoilerplateProps {
  as?: ElementType
  cs?: CsObject
}

type TBoilerplateProps = Omit<Assign<ComponentPropsWithRef<'div'>, IBoilerplateProps>, 'ref'>

export const Boilerplate = forwardRef<unknown, TBoilerplateProps>((props, ref) => {
  const {as: Component = 'div', cs, ...rest} = props
  const css = getCssFromCs(cs)

  return <Component css={css} ref={ref} {...rest} />
})

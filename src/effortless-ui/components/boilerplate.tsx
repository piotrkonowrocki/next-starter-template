import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'
import {CSSObject} from '@emotion/react'

import {Assign, CsObject} from '@/effortless-ui/types'
import {csToCssMap} from '@/effortless-ui/utils'

interface IBoilerplateProps {
  as?: ElementType
  cs?: CsObject
}

type TBoilerplateProps = Omit<Assign<ComponentPropsWithRef<'div'>, IBoilerplateProps>, 'ref'>

const csToCss = (cs: CsObject = {}): CSSObject => {
  const css: CSSObject = {}

  for (const [key, value] of Object.entries(cs)) {
    if (Object.keys(csToCssMap).includes(key)) css[csToCssMap[key]] = value
    else css[key] = value
  }

  return css
}

export const Boilerplate = forwardRef<unknown, TBoilerplateProps>((props, ref) => {
  const {as: Component = 'div', cs, ...rest} = props
  const css = csToCss(cs)

  return <Component css={css} ref={ref} {...rest} />
})

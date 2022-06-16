import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from './boilerplate'

export const Button = forwardRef<unknown, Omit<TBoilerplateProps<'button'>, 'tag'>>((props, ref) => {
  return <Boilerplate from="Button" tag="button" ref={ref} {...props} />
})

import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from './boilerplate'

type AllowedTags = 'address' | 'blockquote' | 'pre' | 'span'

interface ITextProps {
  tag?: AllowedTags
}

export const Text = forwardRef<unknown, TBoilerplateProps<'p'> & ITextProps>((props, ref) => {
  const {tag = 'p', ...rest} = props

  return <Boilerplate from="Text" tag={tag} ref={ref} {...rest} />
})

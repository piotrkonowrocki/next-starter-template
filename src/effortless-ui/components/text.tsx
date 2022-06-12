import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from './boilerplate'

type AllowedTags = 'abbr' | 'address' | 'blockquote' | 'cite' | 'code' | 'label' | 'legend' | 'p' | 'pre' | 'span'

interface ITextProps {
  tag?: AllowedTags
}

export const Text = forwardRef<unknown, TBoilerplateProps & ITextProps>((props, ref) => {
  const {tag = 'p', ...rest} = props

  return <Boilerplate from="Text" tag={tag} ref={ref} {...rest} />
})

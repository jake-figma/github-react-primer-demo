import React from 'react'
import figma from '@figma/code-connect'
import {InlineMessage} from './InlineMessage'

figma.connect(InlineMessage, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=32109-348', {
  props: {
    variant: figma.enum('variant', {
      success: 'success',
      warning: 'warning',
      critical: 'critical',
      unavailable: 'unavailable',
    }),
    size: figma.enum('size', {
      small: 'small',
      medium: 'medium',
    }),
    text: figma.string('text'),
  },
  example: ({size, variant, text}) => (
    <InlineMessage size={size} variant={variant}>
      {text}
    </InlineMessage>
  ),
})

import React from 'react'
import figma from '@figma/code-connect'
import FormControl from '../FormControl'

figma.connect(FormControl.Label, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=15341-46399', {
  props: {
    label: figma.textContent('Label'),
  },
  example: ({label}) => <FormControl.Label>{label}</FormControl.Label>,
})

figma.connect(FormControl.Caption, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=15341-47232', {
  props: {
    caption: figma.textContent('Caption'),
  },
  example: ({caption}) => <FormControl.Caption>{caption}</FormControl.Caption>,
})

figma.connect(FormControl.Validation, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=34428-2171', {
  props: {
    text: figma.textContent('text'),
    variant: figma.enum('variant', {
      error: 'error',
      success: 'success',
    }),
  },
  example: ({text, variant}) => <FormControl.Validation variant={variant}>{text}</FormControl.Validation>,
})

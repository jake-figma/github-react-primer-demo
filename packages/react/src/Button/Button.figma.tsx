// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {figma} from '@figma/code-connect'
import {ButtonComponent as Button} from './Button'
import React from 'react'

const componentProps = {
  label: figma.textContent('Button'),
  disabled: figma.enum('state', {disabled: true}),
  inactive: figma.enum('state', {inactive: true}),
  size: figma.enum('size', {
    small: 'small',
    medium: 'medium',
    large: 'large',
  }),
  alignContent: figma.enum('alignContent', {
    start: 'start',
    center: 'center',
  }),
  variant: figma.enum('variant', {
    primary: 'primary',
    secondary: 'default',
    danger: 'danger',
    invisible: 'invisible',
  }),
  leadingVisual: figma.boolean('leadingVisual?', {
    true: figma.instance('leadingVisual'),
    false: undefined,
  }),
  trailingVisual: figma.boolean('trailingVisual?', {
    true: figma.instance('trailingVisual'),
    false: undefined,
  }),
}

figma.connect(Button, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=30258-5582', {
  props: componentProps,
  example: ({label, ...props}) => <Button {...props}>{label} Jake was HERE</Button>,
})

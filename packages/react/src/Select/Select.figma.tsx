import React from 'react'
import figma from '@figma/code-connect'
import Select from './Select'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Select, 'https://www.figma.com/design/ieK3h0I8pVv7tRUoR3z4Hh?node-id=15341-46907', {
  props: {
    textInput: figma.nestedProps('Text Input/value', {
      label: figma.textContent('Label'),
    }),
    icon: figma.instance('icon'),
    caption: figma.boolean('caption?', {
      false: undefined,
      true: figma.children(['_Caption']),
    }),
    size: figma.enum('size', {
      small: 'small',
      medium: 'medium',
      large: 'large',
    }),
    state: figma.enum('state', {
      rest: 'rest',
      focus: 'focus',
      disabled: 'disabled',
      'read-only': 'read-only',
    }),
    label: figma.children(['Label']),
  },
  example: ({textInput, label, size, caption}) => (
    // Select and FormControl.Label must be direct children of FormControl
    <>
      {label}
      <Select size={size} placeholder={textInput.label} value={textInput.label} />
      {caption}
    </>
  ),
})
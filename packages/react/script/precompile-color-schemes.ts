import fs from 'fs'
import path from 'path'
import {colors} from '../src/legacy-theme/ts/colors'
import {partitionColors, omitScale} from '../src/utils/theme'

const colorSchemes = Object.entries(colors).reduce((acc, [name, variables]) => {
  const {colors, shadows} = partitionColors(variables)
  return {
    ...acc,
    [name]: {
      colors: omitScale(colors),
      shadows: omitScale(shadows),
    },
  }
}, {})

const colorSchemeFileContent = `// This file is auto-generated by precompile-color-schemes.ts
// run \`npm run build:precompile-color-schemes\` to regenerate

type Scheme = keyof typeof colors
type SchemeValue = Record<'colors' | 'shadows', Partial<typeof colors.light>>

const colors = ${JSON.stringify(colorSchemes, null, 2)}

export const colorSchemes: Record<Scheme, SchemeValue> = colors as Record<Scheme, SchemeValue>
`

fs.writeFileSync(path.join(__dirname, '../src/legacy-theme/ts/color-schemes.ts'), colorSchemeFileContent)
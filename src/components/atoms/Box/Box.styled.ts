import styled, { DefaultTheme } from 'styled-components/native'
import {
  AlignOptions,
  JustifyOptions,
  SpacingOptions,
  DirectionOptions,
  Spacing
} from '.'

type StyleProps = {
  f?: number
  m?: SpacingOptions | Spacing
  p?: SpacingOptions | Spacing
  justify?: JustifyOptions
  align?: AlignOptions
  flexDirection?: DirectionOptions
  bc: string
}

const renderValue = (data: any, theme: DefaultTheme, type: string) => {
  let string = ''
  if (['number', 'string'].includes(typeof data)) {
    let valueToSet = data
    if (['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(data)) {
      valueToSet = theme.spacing[data]
    }
    string += `${type}: ${valueToSet}px;`
  }

  if (['object'].includes(typeof data)) {
    Object.keys(data).forEach((key) => {
      const value = data[key]
      if (typeof value === 'string') {
        string += `${type}-${key}: ${theme.spacing[value]}px;`
      } else {
        string += `${type}-${key}: ${value}px;`
      }
    })
  }
  return string
}

const Container = styled.View<StyleProps>`
  ${({ f }) =>
    f
      ? `
  flex: ${f}`
      : ``};
  background-color: ${({ bc }) => bc};
  ${({ theme, m }) => (m ? renderValue(m, theme, 'margin') : null)}
  ${({ theme, p }) => (p ? renderValue(p, theme, 'padding') : null)}
    ${({ justify }) =>
    justify
      ? `
    justify-content: ${justify}`
      : ``}
      ${({ flexDirection }) =>
    flexDirection
      ? `
      flex-direction: ${flexDirection}
      `
      : ''}
    ${({ align }) =>
    align
      ? `
    align-items: ${align}`
      : ``}
`

export { Container }

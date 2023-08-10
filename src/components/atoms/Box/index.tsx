import React, { FC } from 'react'
import { ViewProps } from 'react-native'
import { Container } from './Box.styled'

export type SpacingOptions =
  | number
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | undefined

export type JustifyOptions =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined

export type AlignOptions =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | undefined

export type DirectionOptions = 'column' | 'row'

export type Spacing = {
  top?: SpacingOptions | null
  right?: SpacingOptions | null
  bottom?: SpacingOptions | null
  left?: SpacingOptions | null
}

interface BoxProps extends ViewProps {
  margin?: SpacingOptions | Spacing
  padding?: SpacingOptions | Spacing
  flex?: number
  justify?: JustifyOptions
  align?: AlignOptions
  flexDirection?: DirectionOptions
  backgroundcolor?: string
}

const Box: FC<BoxProps> = ({
  margin,
  padding,
  justify,
  flex,
  align,
  flexDirection = 'column',
  backgroundcolor = 'transparent',
  ...rest
}) => {
  return (
    <Container
      f={flex}
      bc={backgroundcolor}
      m={margin}
      p={padding}
      justify={justify}
      align={align}
      flexDirection={flexDirection}
      {...rest}
    />
  )
}

export default Box

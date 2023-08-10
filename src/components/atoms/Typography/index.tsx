import React, { FC } from 'react'
import { TextProps } from 'react-native'
import { StyledText } from './Typography.styled'

interface TypographyProps extends TextProps {
  variant?:
    | 'large'
    | 'medium'
    | 'title'
    | 'titleBold'
    | 'label'
    | 'labelBold'
    | 'body'
    | 'bodyBold'
    | 'small'
  color?: string
  spacingBottom?: number
  alignText?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined
  weight?: string
  uppercase?: boolean
}

const Typography: FC<TypographyProps> = ({
  variant = 'body',
  color = 'white',
  spacingBottom,
  children,
  alignText = 'auto',
  weight,
  uppercase = false,
  ...rest
}) => {
  return (
    <StyledText
      spacingBottom={spacingBottom}
      color={color}
      variant={variant}
      alignText={alignText}
      allowFontScaling
      maxFontSizeMultiplier={1.2}
      {...rest}
      weight={weight}
      uppercase={uppercase}
    >
      {children}
    </StyledText>
  )
}

export default Typography

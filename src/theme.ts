import 'styled-components'
import { DefaultTheme } from 'styled-components'

export interface ThemeColors {
  appBackground: string
  cardBackground: string
  primaryThree: string
  primaryFour: string
  yellow: string
  orange: string
  red: string
  text: string
  secondaryText: string
  border: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors
    typography: (color: string) => {
      large: string
      medium: string
      title: string
      titleBold: string
      label: string
      labelBold: string
      body: string
      bodyBold: string
      small: string
    }
    spacing: {
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
}

const colors = {
  appBackground: '#0C0235',
  cardBackground: '#120351',
  primaryThree: '#85A7FF',
  primaryFour: '#D6E1FF',
  yellow: '#FFD465',
  orange: '#FF9D65',
  red: '#FF5E5E',
  text: '#ffffff',
  secondaryText: '#AFDEFF',
  border: 'rgba(255, 255, 255, 0.6)'
}

const typography = (typeColor = 'black') => {
  return {
    large: `
      font-size: 70px;
      color: ${typeColor};
      line-height: 84px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Medium';
    `,
    medium: `
      font-size: 56px;
      color: ${typeColor};
      line-height: 68px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Medium';
    `,
    titleBold: `
      font-size: 18px;
      color: ${typeColor};
      line-height: 22px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Medium';
    `,
    title: `
      font-size: 18px;
      color: ${typeColor};
      line-height: 22px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Regular';
    `,
    labelBold: `
      font-size: 15px;
      color: ${typeColor};
      line-height: 18px;
      letter-spacing: -0.3px;
      font-family: 'Inter-SemiBold';
    `,
    label: `
      font-size: 15px;
      color: ${typeColor};
      line-height: 18px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Regular';
    `,
    bodyBold: `
      font-size: 14px;
      line-height: 17px;
      color: ${typeColor};
      letter-spacing: -0.3px;
      font-family: 'Inter-Medium';
    `,
    body: `
      font-size: 14px;
      line-height: 17px;
      color: ${typeColor};
      letter-spacing: -0.3px;
      font-family: 'Inter-Regular';
  `,
    small: `
      font-size: 12px;
      color: ${typeColor};
      line-height: 15px;
      letter-spacing: -0.3px;
      font-family: 'Inter-Regular';
    `
  }
}

const theme: DefaultTheme = {
  colors,
  typography,
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48
  }
}

export default theme

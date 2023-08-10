import styled from 'styled-components/native'

type Props = {
  color: string
  variant: string
  spacingBottom?: number
  alignText?: string
  weight?: string
  uppercase?: boolean
}

const StyledText = styled.Text<Props>`
  ${({ theme, variant }) => theme.typography('black')[variant]}
  color: ${({ color }) => color ?? 'black'};
  padding-bottom: ${({ spacingBottom }) => spacingBottom ?? 0}px;
  text-align: ${({ alignText }) => alignText || 'auto'};
  flex-shrink: 0;
  flex-grow: 0;
  font-weight: ${({ weight }) => weight ?? '400'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`

export { StyledText }

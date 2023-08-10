import styled from 'styled-components/native'

const HourlyCellContainer = styled.View`
  width: 80px;
  flex-direction: column;
  align-items: center;
`

const HourlyIcon = styled.View<{ showRain: boolean }>`
  justify-content: ${({ showRain }) => (showRain ? 'space-between' : 'center')};
  height: 56px;
`

export { HourlyCellContainer, HourlyIcon }

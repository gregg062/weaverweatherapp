import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const CurrentButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  height: 72px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  padding-left: 12px;
`

const CurrentInner = styled.View`
  margin-left: 12px;
  height: 100%;
  justify-content: center;
`

const CurrentInfo = styled.View`
  flex-direction: row;
`

export { CurrentButton, CurrentInner, CurrentInfo }

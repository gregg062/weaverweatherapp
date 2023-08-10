import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const CurrentButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const CurrentInner = styled.View`
  margin-left: 12px;
  height: 100%;
`

const CurrentInfo = styled.View`
  flex-direction: row;
`

export { CurrentButton, CurrentInner, CurrentInfo }

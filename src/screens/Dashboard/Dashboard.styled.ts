import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.appBackground};
`

const HourlyContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.appBackground};
`

const DailyContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.appBackground};
  padding: 20px;
`

export { DailyContainer, StyledSafeArea, HourlyContainer }

import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const LocationContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
`

const LocationTextPress = styled(TouchableOpacity)<{ isFav: boolean }>`
  width: 80%;
  padding: 16px;
  flex-direction: ${({ isFav }) => (isFav ? 'row' : 'column')};
`

const FavIconPress = styled(TouchableOpacity)`
  width: 20%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export { LocationContainer, LocationTextPress, FavIconPress }

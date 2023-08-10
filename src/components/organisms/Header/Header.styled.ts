import { TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const HeaderContainer = styled.View`
  height: 72px;
  position: relative;
  flex-direction: row;
`

const HeaderButton = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 8px;
`

const TextContainer = styled.View`
  width: 80%;
`

const LocationInput = styled(TextInput)`
  flex: 1;
  width: 100%;
  padding-left: 8px;
  color: white;
`

export { HeaderContainer, HeaderButton, TextContainer, LocationInput }

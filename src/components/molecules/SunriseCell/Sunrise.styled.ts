import styled from 'styled-components/native'

const Card = styled.View`
  width: 47%;
  height: 47%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

const CardHeader = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 8px;
  margin-bottom: 4px;
  justify-content: space-evenly;
`

export { Card, CardHeader }

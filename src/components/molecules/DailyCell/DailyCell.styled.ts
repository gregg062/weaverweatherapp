import styled from 'styled-components/native'

const DailyCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
`

const Day = styled.View`
  width: 35%;
`

const Probability = styled.View`
  width: 20%;
  flex-direction: row;
  align-items: center;
`

const IconContainer = styled.View`
  width: 20%;
  align-items: center;
`

const HighLow = styled.View`
  flex-direction: row;
  width: 25%;
  justify-content: flex-end;
`

export { DailyCard, Day, Probability, IconContainer, HighLow }

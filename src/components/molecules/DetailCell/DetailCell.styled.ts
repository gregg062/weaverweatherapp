import styled from 'styled-components/native'

const DetailCard = styled.View<{ needMargin: boolean }>`
  width: 47%;
  height: 47%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  margin-bottom: 6%;
  ${({ needMargin }) => needMargin && 'margin-right: 6%'};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`

export { DetailCard }

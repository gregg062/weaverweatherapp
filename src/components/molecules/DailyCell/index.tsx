import React, { FC } from 'react'
import moment from 'moment'
import Typography from '../../atoms/Typography'
import { weatherObject } from '../../../types/weather'
import { RainDrop } from '../../../assets/icons'
import { IconLookup } from '../../../utils/iconLookup'
import {
  DailyCard,
  Day,
  HighLow,
  IconContainer,
  Probability
} from './DailyCell.styled'
import Spacer from '../../atoms/Spacer'
import { useTheme } from 'styled-components'

interface DailyCellProps {
  item: weatherObject
  index: number
}

const DailyCell: FC<DailyCellProps> = ({ item, index }) => {
  const { colors } = useTheme()
  return (
    <DailyCard>
      <Day>
        <Typography variant="label" weight="500">
          {index === 0 ? 'Today' : moment.unix(item.dt).format('dddd')}
        </Typography>
      </Day>
      <Probability>
        <RainDrop />
        <Typography>{(item.pop * 100).toFixed(0)}%</Typography>
      </Probability>
      <IconContainer>{IconLookup(item.weather[0], 30)}</IconContainer>
      <HighLow>
        <Typography variant="title" weight="500">
          {item.temp.min.toFixed(0)}&deg;
        </Typography>
        <Spacer orientation="all" size={8} />
        <Typography variant="title" weight="500" color={colors.secondaryText}>
          {item.temp.max.toFixed(0)}&deg;
        </Typography>
      </HighLow>
    </DailyCard>
  )
}

export default DailyCell

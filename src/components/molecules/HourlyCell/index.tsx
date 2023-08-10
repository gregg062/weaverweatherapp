import React, { FC } from 'react'
import Typography from '../../atoms/Typography'
import { useTheme } from 'styled-components'
import moment from 'moment-timezone'
import { IconLookup } from '../../../utils/iconLookup'
import { weatherObject } from '../../../types/weather'
import { HourlyCellContainer, HourlyIcon } from './HourlyCell.styled'
import Spacer from '../../atoms/Spacer'

interface HourlyCellProps {
  item: weatherObject
  index: number
  timezone: string
}

const HourlyCell: FC<HourlyCellProps> = ({ item, index, timezone }) => {
  const { colors } = useTheme()
  const { pop, dt, weather } = item
  const rainProbability = (pop * 100).toFixed(0)

  const calcTimeDisplay = () => {
    if (index === 0) {
      return 'now'
    } else if (timezone) {
      return moment.unix(dt).tz(timezone).format('h A')
    }
  }

  return (
    <HourlyCellContainer>
      <Typography spacingBottom={8} alignText="right">
        {calcTimeDisplay()}
      </Typography>
      <HourlyIcon showRain={parseInt(rainProbability, 10) > 10}>
        {IconLookup(weather[0], 30)}
        {parseInt(rainProbability, 10) > 10 ? (
          <>
            <Spacer orientation="vertical" size={4} />
            <Typography
              variant="body"
              spacingBottom={8}
              color={colors.secondaryText}
            >
              {rainProbability}%
            </Typography>
          </>
        ) : null}
      </HourlyIcon>

      <Typography variant="title">
        {Number(item.temp).toFixed(0)}&deg;
      </Typography>
    </HourlyCellContainer>
  )
}

export default HourlyCell

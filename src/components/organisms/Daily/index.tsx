import React, { FC, memo } from 'react'
import { FlatList } from 'react-native'
import Typography from '../../atoms/Typography'
import { weatherObject } from '../../../types/weather'
import DailyCell from '../../molecules/DailyCell'
import { DailyContainer } from './Daily.styled'

interface CarouselProps {
  data: weatherObject[]
}

const Daily: FC<CarouselProps> = ({ data }) => {
  const sevenDaysData = data.slice(0, 7)

  return (
    <DailyContainer>
      <Typography uppercase spacingBottom={8}>
        7 Day Forecast
      </Typography>
      <FlatList
        scrollEnabled={false}
        data={sevenDaysData}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={({ item, index }) => {
          return <DailyCell item={item} index={index} />
        }}
      />
    </DailyContainer>
  )
}

export default memo(Daily)

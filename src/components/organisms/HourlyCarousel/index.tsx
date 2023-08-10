/* eslint-disable react-native/no-inline-styles */
import React, { FC, memo } from 'react'
import { FlatList, View } from 'react-native'
import HourlyCell from '../../molecules/HourlyCell'

interface CarouselProps {
  data: any[]
  timezone: string
}

const HourlyCarousel: FC<CarouselProps> = ({ data, timezone }) => {
  const twentyFourHourData = data.slice(0, 24)

  return (
    <View>
      <FlatList
        style={{ padding: 20, paddingLeft: 10 }}
        contentContainerStyle={{ paddingRight: 40 }}
        horizontal
        data={twentyFourHourData}
        keyExtractor={(item) => item.dt}
        renderItem={({ item, index }) => {
          return <HourlyCell item={item} index={index} timezone={timezone} />
        }}
      />
    </View>
  )
}

export default memo(HourlyCarousel)

/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react'
import { View } from 'react-native'

interface SpacerProps {
  orientation: 'horizontal' | 'vertical' | 'all'
  size: number
}

const Spacer: FC<SpacerProps> = ({ orientation, size }) => {
  return (
    <View
      style={{
        height: orientation === 'vertical' || orientation === 'all' ? size : 0,
        width: orientation === 'horizontal' || orientation === 'all' ? size : 0
      }}
    />
  )
}

export default Spacer

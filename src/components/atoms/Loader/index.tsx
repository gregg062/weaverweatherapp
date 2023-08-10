import React, { FC } from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { useTheme } from 'styled-components'

interface Props {
  height?: number
}
const RectLoader: FC<Props> = ({ height = 50 }) => {
  const { colors } = useTheme()
  return (
    <ContentLoader
      speed={2}
      backgroundColor={colors.cardBackground}
      foregroundColor={colors.appBackground}
      viewBox="0 0 380 50"
    >
      <Rect x="0" y="0" rx="8" ry="8" width={'100%'} height={height} />
    </ContentLoader>
  )
}

export default RectLoader

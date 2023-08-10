import React from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import { LoadingContainer } from './Loading.styled'
import { useTheme } from 'styled-components'

const LoadingScreen = () => {
  const { colors } = useTheme()
  return (
    <LoadingContainer>
      <ContentLoader
        speed={2}
        width={'100%'}
        height={700}
        viewBox="0 0 300 600"
        backgroundColor={colors.cardBackground}
        foregroundColor={colors.appBackground}
      >
        <Rect x="60%" y="10" rx="3" ry="3" width="88" height="60" />
        <Rect x="40%" y="80" rx="3" ry="3" width="50%" height="12" />
        <Rect x="0" y="116" rx="3" ry="3" width="100%" height="60" />
        <Circle cx="15%" cy="47" r="40" />
        <Rect x="0" y="186" rx="5" ry="5" width="100%" height="500" />
      </ContentLoader>
    </LoadingContainer>
  )
}

export default LoadingScreen

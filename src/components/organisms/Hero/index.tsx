import React, { FC, useEffect } from 'react'
import Typography from '../../atoms/Typography'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useTheme } from 'styled-components'
import { IconLookup } from '../../../utils/iconLookup'
import { HighLowContainer } from './Hero.styled'
import { weather } from '../../../types/weather'

interface HeroProps {
  weatherInfo: weather
  temp: string
  feels: string
  heightVal: number
  high: string
  low: string
}

const Hero: FC<HeroProps> = ({
  weatherInfo,
  temp,
  feels,
  heightVal,
  high,
  low
}) => {
  const { description } = weatherInfo
  const { colors } = useTheme()
  const animatedHeaderHeight = useSharedValue(200) // Initial height of your header
  const animatedIconY = useSharedValue(20)
  const animatedIconX = useSharedValue(20)

  useEffect(() => {
    animatedHeaderHeight.value = 200 - heightVal
    animatedIconX.value = 20 - heightVal
    animatedIconY.value = 20 - heightVal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heightVal])

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      minHeight: 90,
      height: animatedHeaderHeight.value,
      backgroundColor: colors.appBackground,
      position: 'relative',
      flexDirection: 'row'
    }
  })

  const headerIconStyle = useAnimatedStyle(() => {
    return {
      height:
        animatedHeaderHeight.value - 40 > 80
          ? animatedHeaderHeight.value - 40
          : 80,
      width:
        animatedHeaderHeight.value - 40 > 80
          ? animatedHeaderHeight.value - 40
          : 80,
      borderRadius: 8,
      position: 'absolute',
      top: animatedIconY.value > 8 ? animatedIconY.value : 8,
      left: animatedIconX.value > 10 ? animatedIconX.value : 10,
      marginRight: 2,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  const headerInfoStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left:
        animatedHeaderHeight.value > 110
          ? animatedHeaderHeight.value - 10
          : 100,
      top: 0,
      height:
        animatedHeaderHeight.value - 20 > 80
          ? animatedHeaderHeight.value
          : '100%',
      right: 20,
      flexDirection: 'row'
    }
  })
  const currentAnimStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left:
        animatedHeaderHeight.value - 150 > 10
          ? animatedHeaderHeight.value - 150
          : 10,
      top: 0,
      minWidth: 130,
      right:
        animatedHeaderHeight.value > 180 ? 0 : 220 - animatedHeaderHeight.value,
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 12
    }
  })

  const currentDetailsAnimStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top:
        animatedHeaderHeight.value - 100 > 16
          ? animatedHeaderHeight.value - 100
          : 16,
      right: 0,
      bottom: 0,
      padding: 8,
      width:
        animatedHeaderHeight.value < 150
          ? withTiming(120, { duration: 200 })
          : withTiming(160, { duration: 200 })
    }
  })

  const textAnimStyle = useAnimatedStyle(() => {
    return {
      color: 'white',
      fontSize:
        animatedHeaderHeight.value < 180
          ? withTiming(56, { duration: 200 })
          : withTiming(70, { duration: 200 }),
      width: '100%',
      textAlign: 'center'
    }
  })

  const titleAnimStyled = useAnimatedStyle(() => {
    return {
      width: '100%',
      paddingLeft:
        animatedHeaderHeight.value < 150
          ? withTiming('0%', { duration: 100 })
          : withTiming('10%', { duration: 100 })
    }
  })

  const feelsAnimStyle = useAnimatedStyle(() => {
    return {
      color: 'white',
      textAlign: 'right',
      fontWeight: '300',
      letterSpacing: -0.3,
      fontFamily: 'Inter-Regular',
      opacity:
        animatedHeaderHeight.value < 150 ? 0 : withTiming(1, { duration: 600 }),
      width:
        animatedHeaderHeight.value < 150
          ? withTiming(0, { duration: 50 })
          : withTiming('70%', { duration: 100 })
    }
  })

  return (
    <Animated.View style={[headerAnimatedStyle]}>
      <Animated.View style={[headerIconStyle]}>
        {IconLookup(
          weatherInfo,
          animatedHeaderHeight.value / 2 > 60
            ? animatedHeaderHeight.value / 2
            : 60
        )}
      </Animated.View>
      <Animated.View style={[headerInfoStyle]}>
        <Animated.View style={[currentAnimStyle]}>
          <Animated.Text style={[textAnimStyle]}>{temp}&deg;</Animated.Text>
        </Animated.View>
        <Animated.View style={[currentDetailsAnimStyle]}>
          <Animated.View style={[titleAnimStyled]}>
            <Typography
              alignText={animatedHeaderHeight.value < 150 ? 'left' : 'right'}
              spacingBottom={8}
            >
              {description}
            </Typography>
          </Animated.View>
          <HighLowContainer>
            <Typography
              alignText={animatedHeaderHeight.value < 150 ? 'left' : 'right'}
            >
              {high}&deg;/{low}&deg;
            </Typography>
            <Animated.Text style={[feelsAnimStyle]}>
              Feels like {feels}
              &deg;
            </Animated.Text>
          </HighLowContainer>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  )
}

export default Hero

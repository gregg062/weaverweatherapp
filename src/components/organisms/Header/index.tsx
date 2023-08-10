import moment from 'moment'
import React, { FC, memo, useEffect, useState } from 'react'
import { Dimensions, Pressable } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import Typography from '../../atoms/Typography'
import { LocationDot } from '../../../assets/icons'
import { useTheme } from 'styled-components'
import { getStateAbbreviation } from '../../../utils/getLocation'
import {
  HeaderButton,
  HeaderContainer,
  LocationInput,
  TextContainer
} from './Header.styled'
import Spacer from '../../atoms/Spacer'
import Loader from '../../atoms/Loader'

const { width } = Dimensions.get('screen')

const AnimatedTouch = Animated.createAnimatedComponent(Pressable)

interface Props {
  close: boolean
  setLocation: (local: string) => void
  action: (open: boolean) => void
  cityInfo: any
  loading: boolean
}

const Header: FC<Props> = ({
  close,
  action = () => {},
  setLocation = () => {},
  cityInfo,
  loading = false
}) => {
  const { city, state } = cityInfo || {}
  const [open, setOpen] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const widthVal = useSharedValue<string>('30%')
  const buttonOpac = useSharedValue<number>(0)
  const detailsOpac = useSharedValue<number>(1)
  const { colors } = useTheme()

  useEffect(() => {
    if (open) {
      widthVal.value = '65%'
      buttonOpac.value = 1
      detailsOpac.value = 0
    } else {
      widthVal.value = '40%'
      buttonOpac.value = 0
      detailsOpac.value = 1
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    setOpen(close)
  }, [close])

  const animatedTodayStyle = useAnimatedStyle(() => {
    return {
      display: open ? 'none' : 'flex',
      position: 'absolute',
      left: 10,
      height: '100%',
      justifyContent: 'center',
      opacity: withTiming(detailsOpac.value, { duration: 300 }),
      zIndex: open ? -1 : 1
    }
  })

  const animatedInputStyle = useAnimatedStyle(() => {
    return {
      height: 40,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      position: 'absolute',
      top: 16,
      left: !open
        ? withTiming(width * 0.55, { duration: 100 })
        : withTiming(10, { duration: 300 }),
      width: withTiming(widthVal.value, { duration: 100 }),
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }
  })

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      right: 6,
      height: '100%',
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: withTiming(buttonOpac.value, { duration: 300 }),
      zIndex: open ? 1 : -1
    }
  })

  return (
    <HeaderContainer>
      <Animated.View style={animatedTodayStyle}>
        <Typography variant="label" weight="500">
          Today
        </Typography>
        <Typography>{moment().format('dddd, MMM D')}</Typography>
      </Animated.View>
      {/* <Loader /> */}
      <Animated.View style={animatedInputStyle}>
        {!open ? (
          <HeaderButton
            onPress={() => {
              setOpen(true)
              action(true)
            }}
          >
            <LocationDot fill="white" width={16} />
            <Spacer orientation="horizontal" size={6} />
            <TextContainer>
              {city && !loading ? (
                <Typography testID="currentLocation">
                  {city}, {getStateAbbreviation(state) ?? state}
                </Typography>
              ) : (
                <Loader />
              )}
            </TextContainer>
          </HeaderButton>
        ) : (
          <LocationInput
            placeholderTextColor={colors.secondaryText}
            placeholder="Search for a city or ZIP code"
            value={input}
            onChange={(e) => {
              setInput(e.nativeEvent.text)
            }}
          />
        )}
      </Animated.View>
      <AnimatedTouch
        style={animatedButtonStyle}
        onPress={() => {
          setOpen(false)
          action(false)
          setLocation(input)
          setInput('')
        }}
      >
        <Typography>Done</Typography>
      </AnimatedTouch>
    </HeaderContainer>
  )
}

export default memo(Header)

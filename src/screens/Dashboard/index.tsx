import React, { createRef, useEffect, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import Header from '../../components/organisms/Header'
import HourlyCarousel from '../../components/organisms/HourlyCarousel'
import Locations from '../../components/organisms/Locations'
import theme from '../../theme'
import Daily from '../../components/organisms/Daily'
import Details from '../../components/organisms/Details'
import { requestLocation } from '../../utils/permissions'
import Hero from '../../components/organisms/Hero'
import { currentWeather, weatherData, weatherObject } from '../../types/weather'
import {
  fetchCityFromZip,
  fetchWeatherData,
  getMyCurrentLocation
} from '../../utils/getLocation'
import { location } from '../../types/location'
import {
  DailyContainer,
  HourlyContainer,
  InfoContainer,
  StyledSafeArea
} from './Dashboard.styled'
import LoadingScreen from '../../components/organisms/Loading'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import { openSettings } from 'react-native-permissions'

const homeSections = [
  { type: 'Hourly', data: [{}] },
  { type: 'Daily', data: [{}] },
  { type: 'Other', data: [{}] }
]

const Dashboard = () => {
  const [scrollHieght, setScrollHeight] = useState(0)
  const [showLocations, setShowLocations] = useState<boolean>(false)
  const [hourlyData, setHourlyData] = useState<weatherObject[]>([])
  const [dailyData, setDailyData] = useState<weatherObject[]>([])
  const [currentConditions, setCurrentConditions] = useState<currentWeather>()
  const [timeZone, setTimeZone] = useState<string>('')
  const [locationDetails, setLocationDetails] = useState<location | null>(null)
  const [myLocation, setMyLocation] = useState<location | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const sectionListRef = createRef<SectionList<any>>()
  const animatedHeightVal = useSharedValue(200)
  const safeArea = useSafeAreaInsets()

  const getInfo = async () => {
    const response = await getMyCurrentLocation()
    if (response) {
      setMyLocation({
        city: response.city,
        state: response.state
      })
      getWeather(response.city)
    }
  }

  const updateWeatherData = async (data: weatherData) => {
    setHourlyData(data.data.hourly)
    setDailyData(data.data.daily)
    setCurrentConditions(data.data.current)
    setTimeZone(data.data.timezone)
    setLoading(false)
  }

  const getWeather = async (city: string) => {
    scrollToTop()
    setLoading(true)
    const info = await fetchWeatherData(city)
    if (info) {
      setLocationDetails({
        city: info.city,
        state: info.state
      })
      updateWeatherData(info)
    } else {
      Alert.alert(`Unable to retrieve weather information for ${city}`)
    }
  }

  const getWeatherFromZip = async (zip: string) => {
    scrollToTop()
    setLoading(true)
    const info = await fetchCityFromZip(zip)
    if (info) {
      setLocationDetails({
        city: info.city,
        state: info.state
      })
      updateWeatherData(info)
    } else {
      Alert.alert(`Unable to retrieve weather information for ${zip}}`)
    }
  }

  const requestLocationPerm = async () => {
    const response = await requestLocation()
    if (response) {
      getInfo()
    } else {
      Alert.alert(
        'Location Permission',
        'You must allow location access to use this app',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'Open Settings',
            onPress: () => {
              openSettings()
            }
          }
        ]
      )
    }
  }

  useEffect(() => {
    getInfo()
    requestLocationPerm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToTop = () => {
    setScrollHeight(0)
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true
    })
  }

  const heroAnim = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: animatedHeightVal.value > 100 ? 200 - animatedHeightVal.value : 80
    }
  })

  return (
    <>
      <StyledSafeArea edges={['top']}>
        <Header
          close={showLocations}
          setLocation={(local) => {
            const regex = /^\d{5}(-\d{4})?$/
            if (regex.test(local)) {
              getWeatherFromZip(local)
            } else if (local.length > 0) {
              getWeather(local)
            }
          }}
          action={(show) => {
            setShowLocations(show)
          }}
          cityInfo={locationDetails}
          loading={loading}
        />
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {dailyData.length && hourlyData.length && currentConditions ? (
              <InfoContainer>
                <Animated.View style={[heroAnim]}>
                  <Hero
                    weatherInfo={currentConditions.weather[0]}
                    feels={(currentConditions?.feels_like).toFixed(0)}
                    temp={currentConditions.temp.toFixed(0)}
                    heightVal={scrollHieght}
                    high={dailyData[0].temp.max.toFixed(0)}
                    low={dailyData[0].temp.min.toFixed(0)}
                  />
                </Animated.View>
                <SectionList
                  ref={sectionListRef}
                  scrollEventThrottle={16}
                  bounces={false}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: theme.colors.appBackground,
                    marginTop: 0,
                    zIndex: -1
                  }}
                  contentContainerStyle={{ paddingTop: 200 }}
                  keyExtractor={(index) => index.toString()}
                  sections={homeSections}
                  stickySectionHeadersEnabled
                  renderItem={({ section }) => {
                    switch (section.type) {
                      case 'Hourly':
                        return (
                          <HourlyContainer>
                            <HourlyCarousel
                              data={hourlyData}
                              timezone={timeZone}
                            />
                          </HourlyContainer>
                        )
                      case 'Daily':
                        return (
                          <DailyContainer>
                            <Daily data={dailyData} />
                          </DailyContainer>
                        )
                      case 'Other':
                        return (
                          <Details
                            data={{
                              uxi: currentConditions.uvi,
                              humidity: currentConditions.humidity,
                              wind: currentConditions.wind_speed,
                              sunrise: currentConditions.sunrise,
                              sunset: currentConditions.sunset,
                              timezone: timeZone
                            }}
                          />
                        )
                      default:
                        return null
                    }
                  }}
                  onScroll={(e) => {
                    setScrollHeight(e.nativeEvent.contentOffset.y)
                    animatedHeightVal.value =
                      200 - e.nativeEvent.contentOffset.y
                  }}
                />
              </InfoContainer>
            ) : null}
            <Locations
              show={showLocations}
              currentLocation={myLocation}
              locationSelected={(local) => {
                getWeather(local)
              }}
              close={() => {
                setShowLocations(false)
              }}
              top={72 + safeArea.top}
            />
          </>
        )}
      </StyledSafeArea>
    </>
  )
}

export default Dashboard

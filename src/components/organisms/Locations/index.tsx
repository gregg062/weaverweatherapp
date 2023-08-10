import React, { FC, useEffect, useState } from 'react'
import { Dimensions, SectionList } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useTheme } from 'styled-components'
import CurrentLocation from '../../molecules/CurrentLocation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateStoredLocations } from '../../../utils/saveLocation'
import Spacer from '../../atoms/Spacer'
import { location } from '../../../types/location'
import SavedList from '../../molecules/SavedList'

const { height } = Dimensions.get('screen')

interface LocationProps {
  show: boolean
  close: () => void
  currentLocation: any
  locationSelected: (city: string) => void
  top: number
}

const locationSections = [
  { type: 'Favorites', data: [{}] },
  { type: 'Recents', data: [{}] }
]

const Locations: FC<LocationProps> = ({
  show,
  close = () => {},
  currentLocation,
  locationSelected,
  top
}) => {
  const { colors } = useTheme()
  const [savedLocations, setSavedLocation] = useState<location[]>([])
  const [recentLocations, setRecentLocations] = useState<location[]>([])

  const retrieveData = async () => {
    const recentDataResponse = await AsyncStorage.getItem('recentStorage')
    if (recentDataResponse) {
      const data = JSON.parse(recentDataResponse)
      setRecentLocations(data)
    }
    const favoriteDataResponse = await AsyncStorage.getItem('favoriteStorage')
    if (favoriteDataResponse) {
      setSavedLocation(JSON.parse(favoriteDataResponse))
    }
  }

  useEffect(() => {
    setSavedLocation([])
    setRecentLocations([])
    retrieveData()
  }, [show])

  const updateSaved = async (add: boolean, city: string, state: string) => {
    if (add) {
      const updated = recentLocations.filter((l) => l.city !== city)
      setRecentLocations(updated)
      setSavedLocation((prev) => [...prev, { city: city, state: state }])
      AsyncStorage.setItem('recentStorage', JSON.stringify(updated))
      updateStoredLocations('favoriteStorage', city, state)
    } else {
      const updated = savedLocations.filter((l) => l.city !== city)
      setSavedLocation(updated)
      setRecentLocations((prev) => [{ city: city, state: state }, ...prev])
      AsyncStorage.setItem('favoriteStorage', JSON.stringify(updated))
      updateStoredLocations('recentStorage', city, state)
    }
  }
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      zIndex: 999,
      backgroundColor: colors.appBackground,
      position: 'absolute',
      padding: show ? 20 : 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      transform: [
        {
          translateY: show
            ? withTiming(top, { duration: 300 })
            : withTiming(height, { duration: 200 })
        }
      ]
    }
  })

  return (
    <Animated.View style={[animatedContainerStyle]}>
      <SectionList
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => index.toString()}
        sections={locationSections}
        SectionSeparatorComponent={() => {
          return <Spacer orientation="vertical" size={12} />
        }}
        ListHeaderComponent={() => {
          return (
            <>
              {currentLocation?.city && (
                <CurrentLocation
                  city={currentLocation.city}
                  state={currentLocation.state}
                  select={(city) => {
                    locationSelected(city)
                    close()
                  }}
                />
              )}
            </>
          )
        }}
        ListFooterComponent={() => {
          return <Spacer orientation="vertical" size={100} />
        }}
        renderItem={({ section }) => {
          switch (section.type) {
            case 'Favorites':
              return (
                <>
                  {savedLocations.length > 0 && (
                    <SavedList
                      title={'Favorites'}
                      data={savedLocations}
                      action={(city: string) => {
                        locationSelected(city)
                        close()
                      }}
                      updateSaved={(
                        add: boolean,
                        city: string,
                        state: string
                      ) => {
                        updateSaved(add, city, state)
                      }}
                    />
                  )}
                </>
              )
            case 'Recents':
              return (
                <>
                  {recentLocations.length > 0 && (
                    <SavedList
                      title={'Recents'}
                      data={recentLocations}
                      action={(city: string) => {
                        locationSelected(city)
                        close()
                      }}
                      updateSaved={(
                        add: boolean,
                        city: string,
                        state: string
                      ) => {
                        updateSaved(add, city, state)
                      }}
                    />
                  )}
                </>
              )
            default:
              return null
          }
        }}
      />
    </Animated.View>
  )
}

export default Locations

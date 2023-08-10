import React, { FC, useEffect, useState } from 'react'
import Typography from '../../atoms/Typography'
import { FavoriteIcon } from '../../../assets/icons'
import { useTheme } from 'styled-components'
import {
  FavIconPress,
  LocationContainer,
  LocationTextPress
} from '../Recent/Recent.styled'
import { favoriteWeather } from '../../../types/weather'
import { getCurrentWeather } from '../../../utils/getLocation'
import Box from '../../atoms/Box'
import { IconLookup } from '../../../utils/iconLookup'
import Spacer from '../../atoms/Spacer'
import { FavoriteWeatherContainer } from './Favorite.styled'

export interface SavedProps {
  city: string
  state: string
  action: () => void
  update: () => void
}

const FavoriteCard: FC<SavedProps> = ({ city, state, action, update }) => {
  const { colors } = useTheme()
  const [weatherDetails, setWeatherDetails] = useState<
    favoriteWeather | undefined
  >(undefined)

  const retrieveWeather = async () => {
    const weather = await getCurrentWeather(city)
    setWeatherDetails(weather)
  }

  useEffect(() => {
    retrieveWeather()
  }, [])

  return (
    <LocationContainer>
      <LocationTextPress isFav={true} onPress={action}>
        <FavoriteWeatherContainer>
          <Typography>
            {weatherDetails ? IconLookup({ ...weatherDetails?.info }, 30) : ''}
          </Typography>
          <Spacer orientation="horizontal" size={12} />
          <Typography variant="title" weight="500">
            {weatherDetails?.temp.toFixed(0)}&deg;
          </Typography>
        </FavoriteWeatherContainer>
        <Box>
          <Typography variant="labelBold" weight="600" spacingBottom={4}>
            {city}
          </Typography>
          <Typography variant="label" weight="300">
            {state}
          </Typography>
        </Box>
      </LocationTextPress>
      <FavIconPress onPress={update}>
        <FavoriteIcon active={true} fill={colors.red} width={28} />
      </FavIconPress>
    </LocationContainer>
  )
}

export default FavoriteCard

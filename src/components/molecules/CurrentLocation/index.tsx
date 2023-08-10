import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import Typography from '../../atoms/Typography'
import { LocationArrow } from '../../../assets/icons'
import {
  CurrentButton,
  CurrentInfo,
  CurrentInner
} from './CurrentLocation.styled'

interface LocationCardProps {
  city: string
  state: string
  select: (city: string) => void
}

const CurrentLocation: FC<LocationCardProps> = ({ city, state, select }) => {
  const { colors } = useTheme()
  return (
    <CurrentButton
      onPress={() => {
        select(city)
      }}
    >
      <LocationArrow fill={colors.text} width={28} />
      <CurrentInner>
        <Typography variant="titleBold" spacingBottom={4}>
          Current Location
        </Typography>
        <CurrentInfo>
          <Typography>
            {city}, {state}
          </Typography>
        </CurrentInfo>
      </CurrentInner>
    </CurrentButton>
  )
}

export default CurrentLocation

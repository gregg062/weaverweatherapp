import React, { FC } from 'react'
import Typography from '../../atoms/Typography'
import { FavoriteIcon } from '../../../assets/icons'
import { useTheme } from 'styled-components'
import { SavedProps } from '../Favourite'
import {
  FavIconPress,
  LocationContainer,
  LocationTextPress
} from './Recent.styled'

const RecentCard: FC<SavedProps> = ({ city, state, action, update }) => {
  const { colors } = useTheme()
  return (
    <LocationContainer>
      <LocationTextPress isFav={false} onPress={action}>
        <Typography variant="labelBold" weight="600" spacingBottom={4}>
          {city ?? ''}
        </Typography>
        <Typography variant="label" weight="300">
          {state ?? ''}
        </Typography>
      </LocationTextPress>
      <FavIconPress onPress={update}>
        <FavoriteIcon
          testID="favoriteIcon"
          active={false}
          fill={colors.text}
          width={28}
        />
      </FavIconPress>
    </LocationContainer>
  )
}

export default RecentCard

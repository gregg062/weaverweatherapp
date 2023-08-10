import React, { FC } from 'react'
import { View } from 'react-native'
import Typography from '../../atoms/Typography'
import { Sunrise } from '../../../assets/icons'
import moment from 'moment-timezone'
import { Card, CardHeader } from './Sunrise.styled'

interface CellProps {
  sunrise?: number
  sunset?: number
  timezone?: string
}
const SunriseCell: FC<CellProps> = ({ sunrise, sunset, timezone }) => {
  return (
    <Card>
      <CardHeader>
        <View>
          <Typography>Sunrise</Typography>
          <Typography>
            {timezone && sunrise
              ? moment.unix(sunrise).tz(timezone).format('h:mm A')
              : null}
          </Typography>
        </View>
        <View>
          <Typography>Sunset</Typography>
          <Typography>
            {timezone && sunset
              ? moment.unix(sunset).tz(timezone).format('h:mm A')
              : null}
          </Typography>
        </View>
      </CardHeader>
      <Sunrise />
    </Card>
  )
}

export default SunriseCell

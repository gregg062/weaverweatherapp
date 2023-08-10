import React, { FC } from 'react'
import { weatherDetails } from '../../../types/weather'
import DetailCell from '../../molecules/DetailCell'
import { Humidity, UxiIcon, Wind } from '../../../assets/icons'
import SunriseCell from '../../molecules/SunriseCell'
import { DetailsContainer, DetailsInner } from './Details.styled'

interface DetailProps {
  data?: weatherDetails
}

const Details: FC<DetailProps> = ({ data }) => {
  const calcUvi = (input: number) => {
    const uvIndex = Math.floor(input)

    const categories = [
      { max: 2, label: 'Low' },
      { max: 5, label: 'Moderate' },
      { max: 7, label: 'High' },
      { max: 9, label: 'Very High' }
    ]

    if (uvIndex === 0) {
      return 'Low'
    }
    for (const category of categories) {
      if (uvIndex <= category.max) {
        return category.label
      }
    }
    return 'Extreme'
  }

  return (
    <DetailsContainer>
      <DetailsInner>
        <DetailCell
          needMargin
          icon={<UxiIcon width={30} />}
          title="UV index"
          detail={data?.uxi ? calcUvi(data?.uxi) : 'Low'}
        />
        <DetailCell
          icon={<Humidity width={30} />}
          title="Humidity"
          detail={data?.humidity + '%'}
        />
        <DetailCell
          needMargin
          icon={<Wind width={30} />}
          title="Wind"
          detail={data?.wind + ' mph'}
        />
        <SunriseCell
          sunrise={data?.sunrise}
          sunset={data?.sunset}
          timezone={data?.timezone}
        />
      </DetailsInner>
    </DetailsContainer>
  )
}

export default Details

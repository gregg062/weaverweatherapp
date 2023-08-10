import React from 'react'
import { SvgProps } from 'react-native-svg'
import {
  Cloudy,
  Rain,
  MostlyCloudyDay,
  MostlyCloudyNight,
  ClearDay,
  ClearNight,
  PartialCloudDay,
  PartialCloudNight,
  FreezeRain,
  Thunder,
  Dust,
  Snow,
  Sleet,
  Foggy,
  HazeDay,
  HazeNight,
  Wind,
  Tornado
} from '../assets/icons/index'
import { weatherInfo } from '../types/weather'

const ICONS: Record<string, React.FC<SvgProps>> = {
  ClearDay,
  ClearNight,
  PartialCloudDay,
  PartialCloudNight,
  MostlyCloudyDay,
  MostlyCloudyNight,
  Thunder,
  Rain,
  Snow,
  Foggy,
  FreezeRain,
  Sleet,
  HazeDay,
  HazeNight,
  Dust,
  Wind,
  Tornado,
  Cloudy
}

type WeatherCode = '01' | '02' | '03' | '04' | '09' | '10' | '11' | '13' | '50'

export const IconLookup = (weather: weatherInfo, size: number = 50) => {
  const { icon, id } = weather
  const main: WeatherCode = icon.slice(0, 2) as WeatherCode
  const day = icon.slice(2, 3) === 'd'

  const dayNightLookup: Record<WeatherCode, string> = {
    '01': day ? 'ClearDay' : 'ClearNight',
    '02': day ? 'PartialCloudDay' : 'PartialCloudNight',
    '03': day ? 'MostlyCloudyDay' : 'MostlyCloudyNight',
    '04': day ? 'MostlyCloudyDay' : 'MostlyCloudyNight',
    '09': renderDrizzleIcon(id),
    '10': renderRainIcon(id),
    '11': 'Thunder',
    '13': renderSnowIcon(id),
    '50': renderAtmosphereIcon(id, day)
  }

  const IconComponent = ICONS[dayNightLookup[main] || 'Cloudy']

  return <IconComponent width={size} />
}

const renderDrizzleIcon = (id: number) => {
  if (id >= 300 && id < 313) return 'Rain'
  if (id === 314) return 'Snow'
  if (id === 321) return 'Foggy'
  return 'Thunder'
}

const renderRainIcon = (id: number) => (id === 511 ? 'FreezeRain' : 'Rain')

const renderSnowIcon = (id: number) =>
  id >= 611 && id < 617 ? 'Sleet' : 'Snow'

const renderAtmosphereIcon = (id: number, day: boolean) => {
  if ((id >= 701 && id < 712) || id === 741) return 'Foggy'
  if (id === 721) return day ? 'HazeDay' : 'HazeNight'
  if (id === 731 || (id >= 751 && id < 763)) return 'Dust'
  if (id === 771) return 'Wind'
  return 'Tornado'
}

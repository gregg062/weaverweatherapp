import React from 'react'
import { render } from '@testing-library/react-native'
import HourlyCell from '../src/components/molecules/HourlyCell'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { weatherObject } from '../src/types/weather'

const mockWeather: weatherObject = {
  dt: 1691582400,
  pop: 0.5,
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }
  ],
  temp: {
    min: 23.0,
    max: 23.0,
    day: 23.0,
    eve: 23.0,
    morn: 23.0,
    night: 23.0
  },
  clouds: 0,
  dew_point: 0,
  feels_like: {
    day: 0,
    eve: 0,
    morn: 0,
    night: 0
  },
  humidity: 0,
  moon_phase: 0,
  moonrise: 0,
  moonset: 0,
  pressure: 0,
  summary: '',
  sunrise: 0,
  sunset: 0,
  uvi: 0,
  wind_deg: 0,
  wind_gust: 0,
  wind_speed: 0
}

describe('<HourlyCell />', () => {
  it('renders correctly with sample data and shows rain probability', () => {
    const timezone = 'America/New_York'
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <HourlyCell item={mockWeather} index={1} timezone={timezone} />
      </ThemeProvider>
    )
    expect(getByText('50%')).toBeTruthy()
    expect(getByText('8 AM')).toBeTruthy()
  })

  it('renders "now" for index 0', () => {
    const timezone = 'America/New_York'
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <HourlyCell item={mockWeather} index={0} timezone={timezone} />
      </ThemeProvider>
    )
    expect(getByText('now')).toBeTruthy()
  })
})

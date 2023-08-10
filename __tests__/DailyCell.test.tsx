import React from 'react'
import { render } from '@testing-library/react-native'
import { weatherObject } from '../src/types/weather'
import DailyCell from '../src/components/molecules/DailyCell'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<DailyCell />', () => {
  const mockWeather: weatherObject = {
    dt: Date.now() / 1000,
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
      min: 10.5,
      max: 20.7,
      day: 0,
      eve: 0,
      morn: 0,
      night: 0
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

  it('renders the correct day for today', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DailyCell item={mockWeather} index={0} />
      </ThemeProvider>
    )
    expect(getByText('Today')).toBeTruthy()
  })

  it('renders the correct probability of precipitation', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DailyCell item={mockWeather} index={0} />
      </ThemeProvider>
    )
    expect(getByText('50%')).toBeTruthy()
  })

  it('renders the correct temperature range', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DailyCell item={mockWeather} index={0} />
      </ThemeProvider>
    )
    expect(getByText('11°')).toBeTruthy()
    expect(getByText('21°')).toBeTruthy()
  })
})

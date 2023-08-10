import React from 'react'
import { render, act } from '@testing-library/react-native'
import FavoriteCard from '../src/components/molecules/Favourite'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

jest.mock('../src/utils/getLocation', () => ({
  getCurrentWeather: jest.fn()
}))

describe('<FavoriteCard />', () => {
  it('renders correctly with given city and state', async () => {
    const mockWeatherData = {
      temp: 23.45,
      info: {
        icon: 'demo',
        id: 1234
      }
    }

    require('../src/utils/getLocation').getCurrentWeather.mockResolvedValue(
      mockWeatherData
    )

    const mockProps = {
      city: 'Los Angeles',
      state: 'CA',
      action: jest.fn(),
      update: jest.fn()
    }

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FavoriteCard {...mockProps} />
      </ThemeProvider>
    )

    await act(async () => {})
    expect(getByText('Los Angeles')).toBeTruthy()
    expect(getByText('CA')).toBeTruthy()
    expect(getByText('23°')).toBeTruthy()
  })
})

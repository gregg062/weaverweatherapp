import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import Hero from '../src/components/organisms/Hero'

describe('<Hero />', () => {
  it('renders the provided weather information correctly', () => {
    const mockWeatherInfo = {
      icon: 'demo',
      id: 1234,
      main: 'Sunny',
      description: 'Sunny'
    }

    const mockTemp = '72'
    const mockFeels = '70'
    const mockHigh = '76'
    const mockLow = '68'

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Hero
          weatherInfo={mockWeatherInfo}
          temp={mockTemp}
          feels={mockFeels}
          heightVal={100}
          high={mockHigh}
          low={mockLow}
        />
      </ThemeProvider>
    )

    expect(getByText('Sunny')).toBeTruthy()
    expect(getByText('72°')).toBeTruthy()
    expect(getByText('76°/68°')).toBeTruthy()
    expect(getByText('Feels like 70°')).toBeTruthy()
  })
})

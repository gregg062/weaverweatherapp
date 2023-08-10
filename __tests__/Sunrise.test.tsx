import React from 'react'
import { render } from '@testing-library/react-native'
import SunriseCell from '../src/components/molecules/SunriseCell'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<SunriseCell />', () => {
  it('renders sunrise and sunset times correctly with sample data', () => {
    const sampleProps = {
      sunrise: 1691582400, // 8 AM
      sunset: 1691629200, // 9 PM
      timezone: 'America/New_York'
    }

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <SunriseCell {...sampleProps} />
      </ThemeProvider>
    )

    expect(getByText('8:00 AM')).toBeTruthy()
    expect(getByText('9:00 PM')).toBeTruthy()
  })

  it('renders without sunrise and sunset times if they are not provided', () => {
    const sampleProps = {
      timezone: 'America/New_York'
    }

    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <SunriseCell {...sampleProps} />
      </ThemeProvider>
    )

    expect(queryByText(/AM|PM/)).toBeNull()
  })
})

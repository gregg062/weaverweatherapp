import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CurrentLocation from '../src/components/molecules/CurrentLocation'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<CurrentLocation />', () => {
  it('renders correctly and responds to press', () => {
    const mockSelect = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CurrentLocation
          city="SampleCity"
          state="SampleState"
          select={mockSelect}
        />
      </ThemeProvider>
    )

    expect(getByText('SampleCity, SampleState')).toBeTruthy()

    fireEvent.press(getByText('Current Location'))
    expect(mockSelect).toHaveBeenCalledWith('SampleCity')
  })
})

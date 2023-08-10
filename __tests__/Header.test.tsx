import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import moment from 'moment'
import Header from '../src/components/organisms/Header'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<Header />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Header
          close={false}
          cityInfo={{ city: 'New York', state: 'New York' }}
          action={jest.fn()}
          setLocation={jest.fn()}
          loading={false}
        />
      </ThemeProvider>
    )
    expect(getByText('Today')).toBeTruthy()
    expect(getByText(moment().format('dddd, MMM D'))).toBeTruthy()
  })

  it('opens search input when location is pressed', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Header
          close={false}
          cityInfo={{ city: 'New York', state: 'New York' }}
          action={jest.fn()}
          setLocation={jest.fn()}
          loading={false}
        />
      </ThemeProvider>
    )

    fireEvent.press(getByText('New York, NY'))
    expect(getByPlaceholderText('Search for a city or ZIP code')).toBeTruthy()
  })

  it('closes search input and calls setLocation callback when "Done" button is pressed', () => {
    const setLocationMock = jest.fn()
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header
          close={false}
          cityInfo={{ city: 'New York', state: 'New York' }}
          action={jest.fn()}
          setLocation={setLocationMock}
          loading={false}
        />
      </ThemeProvider>
    )

    fireEvent.press(getByText('New York, NY'))
    fireEvent.press(getByText('Done'))

    const current = getByTestId('currentLocation')
    expect(current.props.children).toContain('New York')
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import RecentCard from '../src/components/molecules/Recent'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<RecentCard />', () => {
  it('renders the RecentCard component correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RecentCard
          city="San Francisco"
          state="California"
          action={() => {}}
          update={() => {}}
        />
      </ThemeProvider>
    )
    expect(getByText('San Francisco')).toBeTruthy()
    expect(getByText('California')).toBeTruthy()
  })

  it('calls the action callback when the LocationTextPress is pressed', () => {
    const mockAction = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RecentCard
          city="San Francisco"
          state="California"
          action={mockAction}
          update={() => {}}
        />
      </ThemeProvider>
    )

    fireEvent.press(getByText('San Francisco'))
    expect(mockAction).toHaveBeenCalled()
  })

  it('calls the update callback when the FavIconPress is pressed', () => {
    const mockUpdate = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RecentCard
          city="San Francisco"
          state="California"
          action={() => {}}
          update={mockUpdate}
        />
      </ThemeProvider>
    )

    fireEvent.press(getByTestId('favoriteIcon'))
    expect(mockUpdate).toHaveBeenCalled()
  })
})

import React from 'react'
import { render } from '@testing-library/react-native'
import DetailCell from '../src/components/molecules/DetailCell'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

describe('<DetailCell />', () => {
  it('renders correctly with icon, title, and detail', () => {
    const IconMock = () => <React.Fragment>Icon</React.Fragment>
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DetailCell
          icon={<IconMock />}
          title="SampleTitle"
          detail="SampleDetail"
        />
      </ThemeProvider>
    )

    expect(getByText('SampleTitle')).toBeTruthy()
    expect(getByText('SampleDetail')).toBeTruthy()
  })
})

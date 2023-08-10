import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './screens/Dashboard'

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App

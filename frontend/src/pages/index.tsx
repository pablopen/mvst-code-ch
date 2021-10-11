import React, { useState } from 'react'
import { Paper, createTheme, ThemeProvider, CssBaseline } from '@mui/material/'
import Header from './header'
import StopWatch from 'components/stopWatch'

// This is needed bc of Typescript and mui
// see https://mui.com/customization/theming/#custom-variables
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode
        ? {
            neutral: {
              main: '#f7f6f3',
              contrastText: '#000',
            },
          }
        : {
            neutral: {
              main: '#373838',
              contrastText: '#fff',
            },
          }),
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '100vh' }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <StopWatch />
      </Paper>
    </ThemeProvider>
  )
}

export default App

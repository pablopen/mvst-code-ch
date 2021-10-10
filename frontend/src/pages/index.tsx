import React, { useState } from 'react'
import {
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material/'
import Header from './header'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '100vh' }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Typography variant="h1">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
      </Paper>
    </ThemeProvider>
  )
}

export default App

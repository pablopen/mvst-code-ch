import React, { Dispatch, SetStateAction } from 'react'

import { Typography, Paper } from '@mui/material'
import ModeSwitch from 'components/modeSwitch'

interface IHeader {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<IHeader> = ({ darkMode, setDarkMode }) => {
  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
        boxShadow: 'none',
        padding: '20px',
      }}
    >
      <Typography variant="h6">MVST.</Typography>
      <ModeSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    </Paper>
  )
}

export default Header

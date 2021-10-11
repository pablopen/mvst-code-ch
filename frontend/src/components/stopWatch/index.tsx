import React, { useState, useEffect, useRef } from 'react'

import { Box, Typography, Button } from '@mui/material/'
import { PlayArrow, CropSquare } from '@mui/icons-material/'

import Timer from './timer'

const TIMER_PRECISION = 1000 //ms

const StopWatch: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const interval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        setTime((time) => time + TIMER_PRECISION)
      }, TIMER_PRECISION)
    } else {
      if (interval.current) {
        clearInterval(interval.current)
      }
    }
  }, [isActive])

  const startTimer = () => {
    setIsActive(true)
  }

  const stopTimer = () => {
    setIsActive(false)
    setTime(0)
  }

  const totalTime = time
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">
        <Timer time={totalTime} />
      </Typography>

      <Button
        variant="contained"
        color="neutral"
        onClick={() => {
          if (isActive) {
            stopTimer()
          } else {
            startTimer()
          }
        }}
      >
        {isActive ? <CropSquare /> : <PlayArrow />}
        <Timer time={time} />
      </Button>
    </Box>
  )
}

export default StopWatch

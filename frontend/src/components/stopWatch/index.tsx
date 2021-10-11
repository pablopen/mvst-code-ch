import React, { useState, useEffect, useRef } from 'react'

import { Box, Typography, Button } from '@mui/material/'
import { PlayArrow, CropSquare } from '@mui/icons-material/'
import axios from 'axios'

import Timer from './timer'

const TIMER_PRECISION = 1000 //ms

interface IResponseData {
  time: number
}

const StopWatch: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)

  const [totalTime, setTotalTime] = useState(0)
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

  useEffect(() => {
    if (!isActive) {
      axios.get<IResponseData>('http://localhost:8000/times').then((res) => {
        setTotalTime(res.data.time)
      })
    }
  }, [isActive])

  const startTimer = () => {
    setIsActive(true)
  }

  const stopTimer = () => {
    setIsActive(false)
    const timeToSend = time
    axios
      .put<IResponseData>('http://localhost:8000/times', { time: timeToSend })
      .then((res) => {
        setTotalTime(res.data.time)
      })

    setTime(0)
  }

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

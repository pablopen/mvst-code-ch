import React from 'react'

interface ITimer {
  time: number
}

const Timer: React.FC<ITimer> = ({ time }) => {
  let seconds = ('0' + (Math.floor(time / 1000) % 60)).slice(-2)
  let minutes = ('0' + (Math.floor(time / 60000) % 60)).slice(-2)
  let hours = ('0' + Math.floor(time / 3600000)).slice(-1)

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  )
}

export default Timer

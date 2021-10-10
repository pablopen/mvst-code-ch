import React from 'react'
import { Switch } from '@mui/material'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import Brightness7Icon from '@mui/icons-material/Brightness7'

interface IModeSwitch {
  checked?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void
}

const ModeSwitch: React.FC<IModeSwitch> = ({ checked, onChange }) => {
  return (
    <div>
      <Brightness7Icon sx={{ verticalAlign: 'middle' }} />
      <Switch onChange={onChange} checked={checked} />
      <Brightness2Icon sx={{ verticalAlign: 'middle' }} />
    </div>
  )
}

export default ModeSwitch

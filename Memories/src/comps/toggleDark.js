import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle';
import { useState } from 'react';
import useDarkMode from 'use-dark-mode';

export default function ToggleDark() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const darkMode = useDarkMode(false)
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
  )
}

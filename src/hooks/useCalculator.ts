import { useState } from 'react'
import { MAX_DISPLAY_LENGTH } from '../logic/limits'

export type CalculatorApi = ReturnType<typeof useCalculator>

export function useCalculator() {
  const [display, setDisplay] = useState('0')

  function pressDigit(digit: string) {
    setDisplay((current) => {
      if (current === '0') return digit
      if (current.length >= MAX_DISPLAY_LENGTH) return current
      return current + digit
    })
  }

  function pressClear() {
    setDisplay('0')
  }

  return { display, pressDigit, pressClear }
}

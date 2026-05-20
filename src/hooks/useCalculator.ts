import { useState } from 'react'
import { calculate, formatResult, isInvalidResult } from '../logic/calculator'
import type { Operator } from '../logic/calculator'
import { ERROR_TEXT, MAX_DISPLAY_LENGTH } from '../logic/limits'

type State = {
  display: string
  storedValue: number | null
  operator: Operator | null
  waiting: boolean
  error: boolean
}

const INITIAL: State = {
  display: '0',
  storedValue: null,
  operator: null,
  waiting: false,
  error: false
}

const ERROR_STATE: State = { ...INITIAL, display: ERROR_TEXT, error: true }

export type CalculatorApi = ReturnType<typeof useCalculator>

export function useCalculator() {
  const [state, setState] = useState<State>(INITIAL)

  function pressDigit(d: string) {
    setState((s) => {
      if (s.error) return { ...INITIAL, display: d }
      if (s.waiting || s.display === '0') return { ...s, display: d, waiting: false }
      if (s.display.length >= MAX_DISPLAY_LENGTH) return s
      return { ...s, display: s.display + d }
    })
  }

  function pressDecimal() {
    setState((s) => {
      if (s.error) return { ...INITIAL, display: '0.' }
      if (s.waiting) return { ...s, display: '0.', waiting: false }
      if (s.display.includes('.')) return s
      if (s.display.length >= MAX_DISPLAY_LENGTH) return s
      return { ...s, display: s.display + '.' }
    })
  }

  function pressOperator(op: Operator) {
    setState((s) => {
      if (s.error) return s
      const current = parseFloat(s.display)
      if (s.storedValue !== null && s.operator !== null && !s.waiting) {
        const result = calculate(s.storedValue, current, s.operator)
        if (isInvalidResult(result)) return ERROR_STATE
        return { ...s, display: formatResult(result), storedValue: result, operator: op, waiting: true }
      }
      return { ...s, storedValue: current, operator: op, waiting: true }
    })
  }

  function pressEquals() {
    setState((s) => {
      if (s.error || s.operator === null || s.storedValue === null) return s
      const current = parseFloat(s.display)
      const result = calculate(s.storedValue, current, s.operator)
      if (isInvalidResult(result)) return ERROR_STATE
      return { ...INITIAL, display: formatResult(result) }
    })
  }

  function pressToggleSign() {
    setState((s) => {
      if (s.error || s.display === '0') return s
      const next = s.display.startsWith('-') ? s.display.slice(1) : '-' + s.display
      if (next.length > MAX_DISPLAY_LENGTH) return s
      return { ...s, display: next }
    })
  }

  function pressClear() {
    setState(INITIAL)
  }

  return {
    display: state.display,
    pressDigit,
    pressDecimal,
    pressOperator,
    pressEquals,
    pressToggleSign,
    pressClear
  }
}

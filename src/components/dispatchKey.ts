import type { CalculatorApi } from '../hooks/useCalculator'

const DIGITS = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

export function dispatchKey(calc: CalculatorApi, label: string) {
  if (label === 'C') return calc.pressClear()
  if (DIGITS.has(label)) return calc.pressDigit(label)
}

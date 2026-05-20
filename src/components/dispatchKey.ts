import type { CalculatorApi } from '../hooks/useCalculator'
import type { Operator } from '../logic/calculator'

const DIGITS = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
const OPERATORS = new Set<Operator>(['+', '-', '*', '/', '%'])

export function dispatchKey(calc: CalculatorApi, label: string) {
  if (label === 'C') return calc.pressClear()
  if (label === '+/-') return calc.pressToggleSign()
  if (label === '=') return calc.pressEquals()
  if (label === '.') return calc.pressDecimal()
  if (DIGITS.has(label)) return calc.pressDigit(label)
  if (OPERATORS.has(label as Operator)) return calc.pressOperator(label as Operator)
}

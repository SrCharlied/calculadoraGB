import { MAX_DISPLAY_LENGTH, MAX_VALUE } from './limits'

export type Operator = '+' | '-' | '*' | '/' | '%'

export function calculate(left: number, right: number, op: Operator): number {
  if (op === '+') return left + right
  if (op === '-') return left - right
  if (op === '*') return left * right
  if (op === '/') return left / right
  return left % right
}

export function isInvalidResult(value: number): boolean {
  return !Number.isFinite(value) || value < 0 || value > MAX_VALUE
}

export function formatResult(value: number): string {
  if (Number.isInteger(value)) return String(value)

  const asText = String(value)
  if (asText.length <= MAX_DISPLAY_LENGTH) return asText

  const intText = Math.trunc(value).toString()
  const decimalsAllowed = MAX_DISPLAY_LENGTH - intText.length - 1
  if (decimalsAllowed <= 0) return intText

  return value.toFixed(decimalsAllowed)
}

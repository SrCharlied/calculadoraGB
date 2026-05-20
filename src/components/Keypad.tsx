import { ButtonGrid } from './ButtonGrid'
import { CalcButton } from './CalcButton'
import { KEYPAD_LAYOUT } from './keypadLayout'

type KeypadProps = {
  onKey: (label: string) => void
}

export function Keypad({ onKey }: KeypadProps) {
  return (
    <ButtonGrid>
      {KEYPAD_LAYOUT.map((key) => (
        <CalcButton key={key.label} label={key.label} variant={key.variant} onClick={() => onKey(key.label)} />
      ))}
    </ButtonGrid>
  )
}

import { ButtonGrid } from './ButtonGrid'
import { CalcButton } from './CalcButton'
import { KEYPAD_LAYOUT } from './keypadLayout'

const noop = () => {}

export function Keypad() {
  return (
    <ButtonGrid>
      {KEYPAD_LAYOUT.map((key) => (
        <CalcButton key={key.label} label={key.label} variant={key.variant} onClick={noop} />
      ))}
    </ButtonGrid>
  )
}

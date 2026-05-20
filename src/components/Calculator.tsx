import { Display } from './Display'
import { Keypad } from './Keypad'

export function Calculator() {
  return (
    <main className="calculator">
      <div className="brand">Pocket Calc 99</div>
      <Display value="0" />
      <Keypad />
    </main>
  )
}

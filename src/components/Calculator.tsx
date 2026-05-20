import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { dispatchKey } from './dispatchKey'

export function Calculator() {
  const calc = useCalculator()

  return (
    <main className="calculator">
      <div className="brand">Pocket Calc 99</div>
      <Display value={calc.display} />
      <Keypad onKey={(label) => dispatchKey(calc, label)} />
    </main>
  )
}

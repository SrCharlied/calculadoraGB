import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calculator } from '../components/Calculator'

function press(label: string) {
  return userEvent.click(screen.getByRole('button', { name: label }))
}

async function pressMany(labels: string[]) {
  for (const label of labels) {
    await press(label)
  }
}

function display() {
  return screen.getByRole('status').textContent ?? ''
}

beforeEach(() => {
  cleanup()
  render(<Calculator />)
})

describe('Pocket Calc 99', () => {
  it('concatena dígitos y respeta el límite de 9 caracteres', async () => {
    await pressMany(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    expect(display()).toBe('123456789')
  })

  it('suma encadenada muestra resultado parcial al presionar otra operación', async () => {
    await pressMany(['2', '+', '3', '+', '4', '='])
    expect(display()).toBe('9')
  })

  it('resta con resultado negativo muestra ERROR', async () => {
    await pressMany(['5', '-', '8', '='])
    expect(display()).toBe('ERROR')
  })

  it('resultado mayor a 999999999 muestra ERROR', async () => {
    await pressMany(['9', '9', '9', '9', '9', '9', '9', '9', '9', '+', '1', '='])
    expect(display()).toBe('ERROR')
  })

  it('22 / 7 produce decimal acotado a 9 caracteres empezando con 3.142', async () => {
    await pressMany(['2', '2', '/', '7', '='])
    const out = display()
    expect(out.length).toBeLessThanOrEqual(9)
    expect(out.startsWith('3.142')).toBe(true)
  })

  it('módulo: 10 % 3 = 1', async () => {
    await pressMany(['1', '0', '%', '3', '='])
    expect(display()).toBe('1')
  })

  it('división por cero muestra ERROR', async () => {
    await pressMany(['5', '/', '0', '='])
    expect(display()).toBe('ERROR')
  })

  it('+/- convierte 5 en -5', async () => {
    await pressMany(['5', '+/-'])
    expect(display()).toBe('-5')
  })

  it('no permite dos puntos decimales en un mismo número', async () => {
    await pressMany(['1', '.', '.', '5'])
    expect(display()).toBe('1.5')
  })

  it('después de una operación el siguiente dígito limpia el display', async () => {
    await pressMany(['2', '+', '7'])
    expect(display()).toBe('7')
  })
})

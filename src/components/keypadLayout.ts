export type KeyDef = {
  label: string
  variant?: string
}

export const KEYPAD_LAYOUT: KeyDef[] = [
  { label: 'C', variant: 'clear' },
  { label: '+/-', variant: 'extra' },
  { label: '%', variant: 'op' },
  { label: '/', variant: 'op' },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '*', variant: 'op' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '-', variant: 'op' },
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '+', variant: 'op' },
  { label: '0', variant: 'zero' },
  { label: '.' },
  { label: '=', variant: 'equals' }
]

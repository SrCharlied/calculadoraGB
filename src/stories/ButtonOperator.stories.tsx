import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { CalcButton } from '../components/CalcButton'

const meta: Meta<typeof CalcButton> = {
  title: 'Button/Operator',
  component: CalcButton,
  args: { onClick: fn(), variant: 'op' }
}

export default meta

export const Operator: StoryObj<typeof CalcButton> = {
  args: { label: '+' }
}

export const Equals: StoryObj<typeof CalcButton> = {
  args: { label: '=', variant: 'equals' }
}

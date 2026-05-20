import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { CalcButton } from '../components/CalcButton'

const meta: Meta<typeof CalcButton> = {
  title: 'Button/Number',
  component: CalcButton,
  args: { onClick: fn() }
}

export default meta

export const Number: StoryObj<typeof CalcButton> = {
  args: { label: '7' }
}

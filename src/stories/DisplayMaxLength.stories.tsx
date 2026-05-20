import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Display/MaxLength',
  component: Display
}

export default meta

export const MaxLength: StoryObj<typeof Display> = {
  args: { value: '123456789' }
}

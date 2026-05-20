import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Display/Error',
  component: Display
}

export default meta

export const Error: StoryObj<typeof Display> = {
  args: { value: 'ERROR' }
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calculator } from '../components/Calculator'

const meta: Meta<typeof Calculator> = {
  title: 'Calculator/Default',
  component: Calculator
}

export default meta

export const Default: StoryObj<typeof Calculator> = {}

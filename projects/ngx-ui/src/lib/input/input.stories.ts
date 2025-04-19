import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    valueChange: { action: 'valueChange' },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Initial value',
    placeholder: 'Enter text here...',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: '',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

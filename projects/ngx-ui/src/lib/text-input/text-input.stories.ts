import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  title: 'TextInput',
  component: TextInputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    valueChange: { action: 'valueChange' },
  },
};

export default meta;

type Story = StoryObj<TextInputComponent>;

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

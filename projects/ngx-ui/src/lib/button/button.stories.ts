import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
    buttonClick: { action: 'buttonClick' },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    disabled: false,
    type: 'button',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    type: 'button',
  },
};

export const Submit: Story = {
  args: {
    label: 'Submit',
    disabled: false,
    type: 'submit',
  },
};

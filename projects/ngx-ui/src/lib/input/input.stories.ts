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

const render: Story['render'] = (args, context) => ({
  props: args,
  template: `
    <ngx-input
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      (valueChange)="valueChange($event)"
    ></ngx-input>
  `,
});

export const Default: Story = {
  render,
  args: {
    value: '',
    placeholder: 'Enter text',
    disabled: false,
  },
};

export const WithValue: Story = {
  render,
  args: {
    value: 'Initial value',
    placeholder: 'Enter text here...',
    disabled: false,
  },
};

export const Disabled: Story = {
  render,
  args: {
    value: '',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

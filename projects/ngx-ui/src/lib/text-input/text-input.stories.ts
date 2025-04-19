import type {Meta, StoryObj} from '@storybook/angular';
import {TextInputComponent} from './text-input.component';

const meta: Meta<TextInputComponent> = {
  title: 'TextInput',
  component: TextInputComponent,
  argTypes: {
    label: {control: 'text'},
    value: {control: 'text'},
    placeholder: {control: 'text'},
    disabled: {control: 'boolean'},
    valueChange: {action: 'valueChange'},
  },
};

export default meta;
type Story = StoryObj<TextInputComponent>;

const render: Story['render'] = (args, {valueChange}) => ({
  props: {...args, valueChange},
  template: `
    <ngx-text-input
      [label]="label"
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      (valueChange)="valueChange($event)"
    ></ngx-text-input>
  `,
});

export const Default: Story = {
  render,
  args: {
    label: 'Label',
    value: '',
    placeholder: 'Enter text',
    disabled: false,
  },
};

export const WithValue: Story = {
  render,
  args: {
    label: 'Label',
    value: 'Initial value',
    placeholder: 'Enter text here...',
    disabled: false,
  },
};

export const Disabled: Story = {
  render,
  args: {
    label: 'Label',
    value: '',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

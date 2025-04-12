import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
};

export default meta;

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
  },
};

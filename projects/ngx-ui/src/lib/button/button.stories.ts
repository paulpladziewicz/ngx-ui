import type {Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from './button.component';

type ButtonStory = ButtonComponent & { content: string };

const meta: Meta<ButtonStory> = {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    content: {control: 'text'},
    disabled: {control: 'boolean'},
    type: {control: 'radio', options: ['button', 'submit', 'reset']},
    buttonClick: {action: 'buttonClick'},
  },
};
export default meta;

const renderWithContent: StoryObj<ButtonStory>['render'] =
  (args, context) => ({
    props: args,
    template: `
      <ngx-button
        [type]="type"
        [disabled]="disabled"
        (buttonClick)="buttonClick($event)"
      >{{ content }}</ngx-button>
    `
  });

type Story = StoryObj<ButtonStory>;

export const Default: Story = {
  render: renderWithContent,   // Storybook will call it as (args, context)
  args: {
    content: 'Click Me',
    disabled: false,
    type: 'button',
  }
};

export const Disabled: Story = {
  render: renderWithContent,
  args: {
    content: 'Disabled',
    disabled: true,
    type: 'button',
  }
};

export const Submit: Story = {
  render: renderWithContent,
  args: {
    content: 'Submit',
    disabled: false,
    type: 'submit',
  }
};

import { Meta, StoryFn } from '@storybook/react';
import SaleButton, { SaleButtonProps } from './SaleButton';

export default {
  title: 'SaleButton',
  component: SaleButton,
} as Meta<typeof SaleButton>;

type TemplateProps = SaleButtonProps;

const Template: StoryFn<TemplateProps> = (args) => <SaleButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  text: 'Click me',
};





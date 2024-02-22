import { Meta, StoryFn } from '@storybook/react';
import SaleButton, { SaleButtonProps } from './SaleButton';
import HeadButton, { ButtonProps } from '../Nav/HeadButton';

export default {
  title: 'Button',
} as Meta<typeof SaleButton>;

type SaleButtonTemplateProps = SaleButtonProps;

const SaleButtonTemplate: StoryFn<SaleButtonTemplateProps> = (args) => <SaleButton {...args} />;

export const PrimaryButton = SaleButtonTemplate.bind({});
PrimaryButton.args = {
  text: 'Click me',
};

type SecondaryButtonTemplateProps = ButtonProps;

const SecondaryButtonTemplate: StoryFn<SecondaryButtonTemplateProps> = (args) => <HeadButton {...args} />;

export const SecondaryButton = SecondaryButtonTemplate.bind({});
SecondaryButton.args = {
  imageSrc: 'src/assets/basket_icon.svg',
};



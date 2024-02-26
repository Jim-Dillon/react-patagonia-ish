import { Meta, StoryFn } from '@storybook/react';
import SaleButton, { SaleButtonProps } from './SaleButton';
import HeadButton, { ButtonProps } from '../Nav/HeadButton';

export default {
  title: 'Button',
} as Meta;

type SaleButtonTemplateProps = SaleButtonProps;

const SaleButtonTemplate: StoryFn<SaleButtonTemplateProps> = (args) => <SaleButton {...args} />;

export const Primary = SaleButtonTemplate.bind({});
Primary.args = {
  text: 'Click me',
};



const basketIcon = (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.17157 0.671573 3.5 1.5 3.5H11.5C12.3284 3.5 13 4.17157 13 5V12C13 12.8284 12.3284 13.5 11.5 13.5H1.5C0.671573 13.5 0 12.8284 0 12V5ZM1.5 4.5C1.22386 4.5 1 4.72386 1 5V12C1 12.2761 1.22386 12.5 1.5 12.5H11.5C11.7761 12.5 12 12.2761 12 12V5C12 4.72386 11.7761 4.5 11.5 4.5H1.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.04001 2.7002V4.0002H4.04001V2.7002H5.04001Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.97 2.7002V4.0002H7.97V2.7002H8.97Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.40588 1.3999C6.21659 1.3999 6.0299 1.44397 5.86059 1.52863C5.57135 1.67325 5.35141 1.92685 5.24914 2.23363L4.97435 3.05802L4.02567 2.74179L4.30046 1.9174C4.48659 1.35901 4.88692 0.897429 5.41338 0.634201C5.72154 0.480119 6.06134 0.399902 6.40588 0.399902H6.59413C6.93867 0.399902 7.27848 0.480119 7.58664 0.634201C8.1131 0.89743 8.51342 1.35901 8.69955 1.9174L8.97435 2.74179L8.02567 3.05802L7.75087 2.23363C7.64861 1.92685 7.42866 1.67325 7.13942 1.52863C6.97012 1.44397 6.78342 1.3999 6.59413 1.3999H6.40588Z" fill="black"/>
  </svg>
);

type SecondaryButtonTemplateProps = ButtonProps;

const SecondaryButtonTemplate: StoryFn<SecondaryButtonTemplateProps> = (args) => <HeadButton {...args} />;

export const IconOnly = SecondaryButtonTemplate.bind({});
IconOnly.args = {
  iconSVG: basketIcon,
};



import { Meta, StoryFn } from '@storybook/react';
import Swatch, { SwatchProps } from './Swatch';

export default {
    title: 'Swatch',
    component: Swatch,
  } as Meta;

  const Template: StoryFn<SwatchProps> = (args) => 
    <Swatch {...args} />

  export const Primary = Template.bind({}); (
    Primary.args = {
        color: 'mustard'
    }
    
);
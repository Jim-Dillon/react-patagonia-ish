import { Meta, StoryFn } from '@storybook/react';
import OfferTag, { OfferTagProps } from '../Sale/OfferTag';


export default {
    title: 'OfferTag',
  } as Meta<typeof OfferTag>;

type OfferTagTemplateProps = OfferTagProps;

const OfferTagTemplate: StoryFn<OfferTagTemplateProps> = (args) => <OfferTag {...args} />;

export const Default = OfferTagTemplate.bind({});
Default.args = {
  offer: '20%'
};
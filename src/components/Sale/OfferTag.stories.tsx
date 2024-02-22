import { Meta, StoryFn } from '@storybook/react';
import OfferTag, { OfferTagProps } from './OfferTag';


export default {
    title: 'OfferTag',
  } as Meta<typeof OfferTag>;

type OfferTagTemplateProps = OfferTagProps;

const OfferTagTemplate: StoryFn<OfferTagTemplateProps> = (args) => <OfferTag {...args} />;

export const Discount = OfferTagTemplate.bind({});
Discount.args = {
  offer: '20%'
};
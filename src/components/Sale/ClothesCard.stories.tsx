import { Meta, StoryFn } from '@storybook/react';
import ClothesCard, { ClothesCardProps } from './ClothesCard';
import turquoiseTrousers from '/src/assets/clothes/trousers__turquoise.png';
import mustardTrousers from '/src/assets/clothes/trousers__mustard.png';
import lightGreyTrousers from '/src/assets/clothes/trousers__lightGrey.png';
// import styles from 'src/css/ClothesCard.module.scss';

export default {
    title: 'ClothesCard',
    component: ClothesCard,
} as Meta;

type ClothesCardTemplateProps = ClothesCardProps;

const ClothesCardTemplate: StoryFn<ClothesCardTemplateProps> = (args) => <ClothesCard {...args} />;

export const Primary = ClothesCardTemplate.bind({});
Primary.args = {
    price: '£290',
    reducedPrice: '£232',
    title: "W's Upstride Pants",
    buttonColors: ['turquoise', 'mustard', 'lightGrey'],
    offer: '20%',
    images: [turquoiseTrousers, mustardTrousers, lightGreyTrousers]
};
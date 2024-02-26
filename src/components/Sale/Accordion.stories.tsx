import { Meta } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
    title: 'Accordion',
    component: Sidebar,
  } as Meta;
  
  export const Primary = () => (
      <Sidebar />
  );


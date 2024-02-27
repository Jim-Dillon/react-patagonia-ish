import { Meta } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
    title: 'Accordion',
    component: Sidebar,
    parameters: {
        viewport: {
          defaultViewport: 'desktop',
        },
      },
  } as Meta;
  
  export const Default = () => (
    <Sidebar />
  );


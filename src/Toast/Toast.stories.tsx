import { Meta } from '@storybook/react';

import Toast from './Toast';

export default {
  title: 'Toaster/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  }
} as Meta;

export const toast = () => <Toast onClose={() => console.log('close')}>Hello world !</Toast>;
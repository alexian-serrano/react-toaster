import { Meta, Story } from '@storybook/react';

import ToastProvider from './ToastProvider';
import useToaster from './useToaster';

export default {
  title: 'Toaster/ToastProvider',
  decorators: [
    (CurrentStory: Story) => {
      return (
        <ToastProvider>
          <CurrentStory />
        </ToastProvider>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const toaster = () => {
  const toaster = useToaster();

  const displayToast = () => {
    toaster.add('Ceci est un toast de succes. Bravo pour cette réussite 🎉');
  }

  return (
    <div>
      <button onClick={displayToast}>Toast</button>
    </div>
  )
}

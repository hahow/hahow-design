import { addParameters, configure } from '@storybook/react';

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: 'xs',
        styles: {
          width: '320px',
          height: '100%',
        },
        type: 'mobile',
      },
      sm: {
        name: 'sm',
        styles: {
          width: '480px',
          height: '100%',
        },
        type: 'mobile',
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '100%',
        },
        type: 'tablet',
      },
      lg: {
        name: 'lg',
        styles: {
          width: '992px',
          height: '100%',
        },
        type: 'desktop',
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1200px',
          height: '100%',
        },
        type: 'desktop',
      },
    },
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

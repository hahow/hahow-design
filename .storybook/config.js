import { addParameters, configure } from '@storybook/react';

import theme from './theme';
import viewports from './viewports';

addParameters({
  options: {
    theme,
  },
  viewport: {
    viewports,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

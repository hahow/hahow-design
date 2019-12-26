import { variant } from 'styled-system';

import buttonSize from '../../../../constants/buttonSize';

const variantSize = variant({
  prop: 'size',
  variants: {
    [buttonSize.LARGE]: {
      fontSize: '20px',
      lineHeight: 1.6,
      borderRadius: '24px',
      height: '48px',
      width: '208px',
    },
  },
});

export default variantSize;

import { variant } from 'styled-system';

const variantSize = variant({
  prop: 'size',
  variants: {
    large: {
      fontSize: '20px',
      lineHeight: 1.6,
      borderRadius: '24px',
      height: '48px',
      width: '208px',
    },
  },
});

export default variantSize;

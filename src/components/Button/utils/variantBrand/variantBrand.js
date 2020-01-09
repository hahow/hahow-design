import { variant } from 'styled-system';

const variantBrand = variant({
  prop: 'brand',
  variants: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primaries.light',
        color: 'white',
      },
      '&:active, &:focus': {
        backgroundColor: 'primaries.dark',
        color: 'white',
      },
      '&[disabled], &[disabled]:hover': {
        backgroundColor: 'blacks.2',
        borderColor: 'blacks.3',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'rgba(0, 0, 0, 0.25)',
      },
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'white',
      '&:hover': {
        backgroundColor: 'secondaries.light',
        color: 'white',
      },
      '&:active, &:focus': {
        backgroundColor: 'secondaries.dark',
        color: 'white',
      },
      '&[disabled], &[disabled]:hover': {
        backgroundColor: 'blacks.2',
        borderColor: 'blacks.3',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'rgba(0, 0, 0, 0.25)',
      },
    },
  },
});

export default variantBrand;

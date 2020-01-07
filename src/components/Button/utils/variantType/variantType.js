import { plural } from 'pluralize';
import { variant } from 'styled-system';

const variantType = ({ brand }) => variant({
  prop: 'type',
  variants: {
    link: {
      backgroundColor: 'transparent',
      borderRadius: 0,
      boxShadow: 'none',
      color: brand,
      fontWeight: 600,
      height: 'auto',
      padding: 0,
      width: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
        color: `${plural(brand)}.light`,
      },
      '&:active, &:focus': {
        backgroundColor: 'transparent',
        color: `${plural(brand)}.dark`,
      },
      '&[disabled], &[disabled]:hover': {
        backgroundColor: 'transparent',
        border: 0,
        color: 'rgba(0, 0, 0, 0.25)',
      },
      '&[ant-click-animating-without-extra-node]:after': {
        opacity: 0,
      },
    },
    plain: {
      backgroundColor: '#f5f7f9',
      color: 'rgba(0, 0, 0, 0.45)',
      '&:hover': {
        backgroundColor: '#f5f7f9',
        color: brand,
      },
      '&:active, &:focus': {
        backgroundColor: '#f5f7f9',
        color: `${plural(brand)}.dark`,
      },
    },
    transparent: {
      backgroundColor: 'transparent',
      borderColor: brand,
      borderStyle: 'solid',
      borderWidth: '2px',
      color: brand,
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: `${plural(brand)}.light`,
        color: `${plural(brand)}.light`,
      },
      '&:active, &:focus': {
        backgroundColor: 'transparent',
        borderColor: `${plural(brand)}.dark`,
        color: `${plural(brand)}.dark`,
      },
    },
    white: {
      backgroundColor: 'white',
      border: 'solid 1px rgba(0, 0, 0, 0.15)',
      color: 'rgba(0, 0, 0, 0.45)',
      '&:hover': {
        backgroundColor: 'white',
        borderColor: `${plural(brand)}.light`,
        color: `${plural(brand)}.light`,
      },
      '&:active, &:focus': {
        backgroundColor: 'white',
        borderColor: `${plural(brand)}.dark`,
        color: `${plural(brand)}.dark`,
      },
    },
  },
});

export default variantType;

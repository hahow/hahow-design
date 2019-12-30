import { css } from 'styled-components';

export const mixinSize = ({ size }) => css`
  font-size: ${size}px;
`;

export const mixinFirstColor = ({ firstColor }) => css`
  color: ${firstColor}
`;

export const mixinSecondColor = ({ secondColor }) => css`
  .ant-rate-star-first, .ant-rate-star-second {
    color: ${secondColor};
  }
`;

export const mixinGutter = ({ gutter }) => css`
  .ant-rate-star:not(:last-child) {
    margin-right: ${gutter}px;
  }
`;

/**
 * 假設 defaultValue = 3.75，
 * 則 posinset = 4，width = 75，
 * 代表第 4 顆星星的 width = 75%
 */
export const mixinHalf = ({ allowHalf, defaultValue }) => {
  const posinset = Math.ceil(defaultValue);
  const decimal = defaultValue % 1;
  const width = Math.floor(decimal * 100);

  return allowHalf && css`
    .ant-rate-star:not(.ant-rate-star-active) {
      [aria-posinset="${posinset}"][aria-checked="true"] .ant-rate-star-first {
        color: inherit;
        opacity: 1;
        width: ${width}%;
      }
    }
  `;
};

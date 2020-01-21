import { Rate } from 'antd';
import React from 'react';
import styled from 'styled-components';

import {
  mixinFirstColor, mixinGutter, mixinHalf, mixinSecondColor, mixinSize,
} from './utils/mixinCSS/mixinCSS';

export const StyledRateButton = styled(({
  firstColor, gutter, nowrap, secondColor, size, ...rest
}) => <Rate {...rest} />)`
  &.ant-rate {
    ${mixinFirstColor}
    ${mixinGutter}
    ${mixinHalf}
    ${mixinSecondColor}
    ${mixinSize}

    ${({ nowrap }) => nowrap && 'white-space: nowrap'};

    .ant-rate-star-half .ant-rate-star-first, .ant-rate-star-full .ant-rate-star-second {
      color: inherit;
    }
  }
`;

export default StyledRateButton;

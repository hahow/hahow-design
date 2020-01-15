import { Button } from 'antd';
import styled from 'styled-components';

import variantBrand from './utils/variantBrand';
import variantSize from './utils/variantSize';
import variantType from './utils/variantType';

export const StyledButton = styled(Button)`
  &.ant-btn {
    align-items: center;
    border-radius: 20px;
    border: none;
    display: inline-flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    justify-content: center;
    line-height: 1.5;
    width: 180px;

    .anticon {
      display: flex;
    }

    > .anticon + span, > span + .anticon {
      margin-left: 4px;
    }

    &.ant-btn-block {
      width: 100%;
    }

    ${variantBrand}
    ${variantType}
    ${variantSize}
  }
`;

export default StyledButton;

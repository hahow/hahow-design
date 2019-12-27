import { Button as BaseButton, Icon } from 'antd';
import { oneOf, string } from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import buttonBrand from '../../constants/buttonBrand';
import buttonIconPos from '../../constants/buttonIconPos';
import buttonSize from '../../constants/buttonSize';
import buttonType from '../../constants/buttonType';
import theme from '../../theme';
import variantBrand from './utils/variantBrand';
import variantSize from './utils/variantSize';
import variantType from './utils/variantType';

const { LEFT, RIGHT } = buttonIconPos;

const StyledButton = styled(({
  brand, size, type, ...rest
}) => <BaseButton {...rest} />)`
  &.ant-btn {
    align-items: center;
    border-radius: 20px;
    border: none;
    display: flex;
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

const Button = ({
  children, icon, iconPos, testId, ...rest
}) => (
  <StyledButton data-test-id={testId} {...rest}>
    {icon && iconPos === LEFT && <Icon type={icon} />}
    {children}
    {icon && iconPos === RIGHT && <Icon type={icon} />}
  </StyledButton>
);

const ThemedButton = (props) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

Button.propTypes = {
  brand: oneOf(Object.values(buttonBrand)),
  iconPos: oneOf(Object.values(buttonIconPos)),
  size: oneOf(Object.values(buttonSize)),
  testId: string,
  type: oneOf(Object.values(buttonType)),
};

Button.defaultProps = {
  brand: buttonBrand.PRIMARY,
  iconPos: buttonIconPos.LEFT,
  size: null,
  testId: null,
  type: null,
};

export default ThemedButton;

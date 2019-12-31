import { Button as BaseButton, Icon } from 'antd';
import { bool, func, number, oneOf, oneOfType, shape, string } from 'prop-types';
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

/**
 * 按鈕元件，封裝自 [Ant Design](https://ant.design/) 的 [Button](https://ant.design/components/button/) 元件。
 *
 * `props` 在 Ant Design Button 的基礎上，增加了下列改動：
 *
 * 1. 將原先 `type` 的樣式改成透過新增的 `brand` 和 `type` 兩個維度來設定，保持樣式的彈性
 * 2. 新增 `iconPos` 讓圖示可以顯示在右方
 * 3. 移除 `ghost`，改成透過新的 `type` 來實現相同樣式
 * 4. 移除 `shape`，如果日後 styleguide 有需要再實作
 * 5. `size` 移除 `"small"` 的選項，如果日後 styleguide 有需要再實作
 *
 * 設計稿 https://zpl.io/2yWdMPK
 */
const Button = ({
  children, ghost, icon, iconPos, shape, testId, ...rest
}) => (
  <ThemeProvider theme={theme}>
    <StyledButton data-test-id={testId} {...rest}>
      {icon && iconPos === LEFT && <Icon type={icon} />}
      {children}
      {icon && iconPos === RIGHT && <Icon type={icon} />}
    </StyledButton>
  </ThemeProvider>
);

Button.propTypes = {
  /** 將按鈕寬度調整為其 parent 寬度的選項 */
  block: bool,
  /** */
  brand: oneOf(['primary', 'secondary']),
  /** 按鈕失效狀態 */
  disabled: bool,
  /** 點擊跳轉的位址，指定此屬性 `button` 的行為和 `a` 連結一致 */
  href: string,
  /** 設置 `button` 原生的 `type` 值，可選值請參考 [HTML 標準](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) */
  htmlType: string,
  /** 設置按鈕的圖示類型 */
  icon: string,
  /** */
  iconPos: oneOf(['left', 'right']),
  /** 設置按鈕讀取狀態 */
  loading: oneOfType([bool, shape({ delay: number })]),
  /** 點擊按鈕時的 callback */
  onClick: func,
  /** 設置按鈕大小，可選值為 `large` 或者不設 */
  size: oneOf(['default', 'large']),
  /** 相當於 `a` 連結的 `target` 屬性，`href` 存在時生效 */
  target: string,
  testId: string,
  /**  */
  type: oneOf([null, 'link', 'plain', 'transparent', 'whiteThin']),
};

Button.defaultProps = {
  block: false,
  brand: 'primary',
  disabled: false,
  htmlType: 'button',
  iconPos: 'left',
  loading: false,
  size: 'default',
};

export default Button;

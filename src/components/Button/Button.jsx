import { Icon } from 'antd';
import {
  bool, func, node, number, oneOf, oneOfType, shape, string,
} from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import { StyledButton } from './Button.style';

/**
 * 按鈕元件，封裝自 [Ant Design](https://ant.design/) 的 [Button](https://ant.design/components/button/) 元件。
 *
 * 在 Ant Design Button 的 `props` 基礎上，增加了下列改動：
 *
 * 1. 將原先 `type` 的樣式改成透過新增的 `brand` 和 `type` 兩個維度來設定，保持樣式的彈性
 * 2. 新增 `iconPos` 讓圖示可以顯示在右方
 * 3. 移除 `ghost`，改成透過新的 `type` 來實現相同樣式
 * 4. 移除 `shape`，如果日後 styleguide 有需要再實作
 * 5. `size` 移除 `"small"` 的選項，如果日後 styleguide 有需要再實作
 *
 * 設計稿 https://zpl.io/2yWdMPK
 *
 * ### Usage
 *
 * ```js
 * import { Button } from '@hahow/hahow-design';
 * ```
 */
const Button = ({
  // 以下為 antd/Button 原生 props
  block, brand, className, disabled, href, htmlType, loading, onClick, size, target, type,
  // 以下為另外處理的 props
  children, icon, iconPos, testId,
}) => (
  <ThemeProvider theme={theme}>
    <StyledButton
      block={block}
      brand={brand}
      className={className}
      data-test-id={testId}
      disabled={disabled}
      href={href}
      htmlType={htmlType}
      loading={loading}
      onClick={onClick}
      size={size}
      target={target}
      type={type}
    >
      {icon && iconPos === 'left' && <Icon type={icon} />}
      {children}
      {icon && iconPos === 'right' && <Icon type={icon} />}
    </StyledButton>
  </ThemeProvider>
);

Button.propTypes = {
  /** 將按鈕寬度調整為其 parent 寬度的選項 */
  block: bool,
  /** 品牌色 */
  brand: oneOf(['primary', 'secondary']),
  /** 按鈕內容  */
  children: node,
  /** 另外套用樣式 class */
  className: string,
  /** 按鈕失效狀態 */
  disabled: bool,
  /** 點擊跳轉的位址，指定此屬性 `button` 的行為和 `a` 連結一致 */
  href: string,
  /** 設置 `button` 原生的 `type` 值，可選值請參考 [HTML 標準](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) */
  htmlType: string,
  /** 設置按鈕的圖示類型 */
  icon: string,
  /** 圖示的顯示位置，屬性 `icon` 存在時生效 */
  iconPos: oneOf(['left', 'right']),
  /** 設置按鈕讀取狀態 */
  loading: oneOfType([bool, shape({ delay: number })]),
  /** 點擊按鈕時的 callback */
  onClick: func,
  /** 設置按鈕大小，可選值為 `large` 或者不設 */
  size: oneOf(['default', 'large']),
  /** 相當於 `a` 連結的 `target` 屬性，`href` 存在時生效 */
  target: string,
  /** 生成 [data-test-id] attribute 方便測試用 */
  testId: string,
  /** 按鈕的種類 */
  type: oneOf([null, 'link', 'plain', 'transparent', 'whiteThin']),
};

Button.defaultProps = {
  block: false,
  brand: 'primary',
  children: null,
  className: null,
  disabled: false,
  href: undefined,
  htmlType: 'button',
  icon: null,
  iconPos: 'left',
  loading: false,
  onClick: null,
  size: 'default',
  target: null,
  testId: null,
  type: null,
};

export default Button;

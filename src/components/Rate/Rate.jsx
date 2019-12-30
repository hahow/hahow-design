import { Icon } from 'antd';
import {
  arrayOf, bool, func, number, node, object, string,
} from 'prop-types';
import React from 'react';

import { StyledRateButton } from './Rate.style';

/**
 * 評價元件，封裝自 [Ant Design](https://ant.design/) 的 [Rate](https://ant.design/components/rate/) 元件。
 *
 * `props` 在 Ant Design Rate 的基礎上，增加了下列改動：
 *
 * 1. 啟用 `allowHalf` 之後，`defaultValue` 能夠支援任何精度的小數點，例如：`2.75`（原本只能 `2.5`）
 * 2. 新增樣式相關的 `props`：`size`、`firstColor`、`secondColor` 和 `gutter`
 *
 * 設計稿 https://zpl.io/V153P9Q
 */
const Rate = (props) => <StyledRateButton {...props} />;

Rate.propTypes = {
  /** 是否允許再次點擊後清除 */
  allowClear: bool,
  /** 是否允許半選 */
  allowHalf: bool,
  /** 自動獲取焦點 */
  autoFocus: bool,
  /** 自定義符號 */
  character: node,
  /** 自定義樣式 class */
  className: string,
  /** 總數 */
  count: number,
  /** 預設值 */
  defaultValue: number,
  /** 唯讀，無法進行互動 */
  disabled: bool,
  /** 符號的前景色 */
  firstColor: string,
  /** 符號的間距 */
  gutter: number,
  /** 失去焦點時的 callback */
  onBlur: func,
  /** 選擇時的 callback */
  onChange: func,
  /** 獲取焦點時的 callback */
  onFocus: func,
  /** 滑鼠經過時數值變化的 callback */
  onHoverChange: func,
  /** 按鍵 callback */
  onKeyDown: func,
  /** 符號的背景色 */
  secondColor: string,
  /** 符號的大小 */
  size: number,
  /** 自定義樣式對象 */
  style: object,
  /** 自定義每項的提示訊息 */
  tooltips: arrayOf(string),
  /** 當前數，受控值 */
  value: number,
};

Rate.defaultProps = {
  allowClear: true,
  allowHalf: false,
  autoFocus: false,
  character: <Icon theme="filled" type="star" />,
  count: 5,
  defaultValue: 0,
  disabled: false,
  firstColor: '#ffb940',
  gutter: 8,
  secondColor: 'rgba(0, 0, 0, 0.25)',
  size: 36,
};

export default Rate;

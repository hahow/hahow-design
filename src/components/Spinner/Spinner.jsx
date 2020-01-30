import { Lottie } from '@crello/react-lottie';
import {
  string, number, objectOf, oneOfType, bool,
} from 'prop-types';
import React from 'react';
import greenSpinnerLottieJson from './lottie/green-spinner.json';
import whiteSpinnerLottieJson from './lottie/white-spinner.json';

/**
 * > 原始設計稿： https://zeroheight.com/5wafqtyfb/p/0568c3/b/91ebea/t/3732bc
 *
 * 明確告知使用者目前正在讀取過程，例如頁面還有區塊正在載入中、或是表單正在送出。
 *
 * ## 使用時機
 *
 * 1. 區塊內容讀取時
 * 2. 按鈕點擊後，資料儲存中或狀態變更
 *
 * ## 使用範例
 *
 * > ![區塊讀取](https://zeroheight.com/uploads/AwYL2ucbQMNeRJtO3VWwXg.png)
 * >
 * > ▲ 區塊讀取
 *
 * ---
 *
 * > ![按鈕讀取狀態](https://zeroheight.com/uploads/oXwpVs8Z-AmnilrtlORLGw.gif)
 * >
 * > ▲ 按鈕讀取狀態
 */
const Spinner = ({
  className, size, style, inverse,
}) => {
  const animationData = inverse ? whiteSpinnerLottieJson : greenSpinnerLottieJson;
  return animationData && (
    <Lottie
      width={`${size}px`}
      height={`${size}px`}
      className={className}
      config={{ animationData, loop: true, autoplay: true }}
      style={style}
    />
  );
};

Spinner.propTypes = {
  /** 白色版本，適用深色背景，例如按鈕 */
  inverse: bool,
  /** 長與寬，預設 48px */
  size: number,
  /** 傳入 react-lottie 的最外層 <div> 的 class */
  className: string,
  /** 傳入 react-lottie 的最外層 <div> 的 inline style */
  style: objectOf(oneOfType([string, number])),
};

Spinner.defaultProps = {
  className: '',
  inverse: false,
  size: 48,
  style: {
    'margin-right': 'auto',
    'margin-left': 'auto',
  },
};

export default Spinner;

import { Form, Input } from 'antd';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import {
  bool, string, func, oneOf, shape,
} from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Rate from '../Rate';
import { StyledModal } from './RatingModal.style';

/**
 * 評價對話框元件，封裝自 [Ant Design](https://ant.design/) 的 [Modal](https://ant.design/components/modal/) 元件。
 *
 * 設計稿 https://zpl.io/V153P9Q
 *
 * ### Usage
 *
 * ```js
 * import { RatingModal } from '@hahow/hahow-design';
 * import React, { useState } from 'react';
 *
 * const App = () => {
 *   const [visible, setVisible] = useState(false);
 *
 *   const showModal = () => setVisible(true);
 *   const handleCancel = () => setVisible(false);
 *
 *   return (
 *     <>
 *       <Button onClick={showModal}>Open Modal</Button>
 *       <RatingModal onCancel={handleCancel} visible={visible} />
 *     </>
 *   );
 * }
 * ```
 */
const RatingModal = ({
  onCancel, onRatingChange, onReviewSubmit, rating, renderFooter, review, reviewFormDescription,
  reviewFormDescriptionPlaceholder, reviewFormTitle, reviewFormTitlePlaceholder, subtitle, title,
  visible,
}) => {
  const [reviewData, setReview] = useState(review);
  const [ratingData, setRating] = useState(rating);

  useEffect(() => setRating(rating), [rating]);
  useEffect(() => setReview(review), [review]);

  const reviewTitle = get(reviewData, 'title');
  const reviewDescription = get(reviewData, 'description');
  const hasRated = !isNil(ratingData);

  const footer = hasRated && renderFooter({
    onCancel,
    onOk: () => onReviewSubmit && onReviewSubmit(reviewData),
  });

  const handleRatingChange = (e) => {
    setRating(e);
    if (onRatingChange) onRatingChange(e);
  };
  const handleTitleChange = (e) => setReview({
    ...reviewData,
    title: e.target.value,
  });
  const handleDescriptionChange = (e) => setReview({
    ...reviewData,
    description: e.target.value,
  });

  return (
    <StyledModal
      footer={footer}
      onCancel={onCancel}
      title={title}
      visible={visible}
    >
      <div>{subtitle}</div>
      <Rate
        value={ratingData}
        onChange={handleRatingChange}
        size={hasRated ? 24 : 48}
      />
      {
        hasRated && (
          <Form layout="vertical">
            <Form.Item label={reviewFormTitle}>
              <Input
                onChange={handleTitleChange}
                placeholder={reviewFormTitlePlaceholder}
                size="large"
                value={reviewTitle}
              />
            </Form.Item>
            <Form.Item label={reviewFormDescription}>
              <Input.TextArea
                onChange={handleDescriptionChange}
                placeholder={reviewFormDescriptionPlaceholder}
                rows="5"
                value={reviewDescription}
              />
            </Form.Item>
          </Form>
        )
      }
    </StyledModal>
  );
};

RatingModal.propTypes = {
  /** 點擊遮罩層或右上角叉或取消按鈕的 callback */
  onCancel: func,
  /** 點擊評分的 callback，第一個參數為評分 */
  onRatingChange: func,
  /** 點擊送出表單的 callback，第一個參數為 { title: string, description: string } */
  onReviewSubmit: func,
  /** 當前評分數 */
  rating: oneOf([1, 2, 3, 4, 5]),
  /**
   * 評價表單底部內容
   * 第一個參數為 { onOk: func, onCancel: func }
   * 回傳格式詳見 Ant Design Model 元件的 `props.footer`
   */
  renderFooter: func,
  /** 評價 { title: 標題, description: 內容 } */
  review: shape({
    title: string,
    description: string,
  }),
  /** 評價表單內容文字 */
  reviewFormDescription: string,
  /** 評價表單內容 placeholder 文字 */
  reviewFormDescriptionPlaceholder: string,
  /** 評價表單標題文字 */
  reviewFormTitle: string,
  /** 評價表單標題 placeholder 文字 */
  reviewFormTitlePlaceholder: string,
  /** 對話框子標題 */
  subtitle: string,
  /** 對話框標題 */
  title: string,
  /** 對話框是否顯示 */
  visible: bool,
};

RatingModal.defaultProps = {
  onCancel: null,
  onRatingChange: null,
  onReviewSubmit: null,
  rating: null,
  renderFooter: ({ onOk }) => [
    <Button key="submit" onClick={onOk}>
      送出
    </Button>,
  ],
  review: null,
  reviewFormDescription: '內容（選填）',
  reviewFormDescriptionPlaceholder: '這堂課哪些地方對你來說最有幫助呢？有哪些特別有收穫的地方呢？和其他人分享你的學習心得吧',
  reviewFormTitle: '標題（選填）',
  reviewFormTitlePlaceholder: '用一句話總結你的心得吧',
  subtitle: '你覺得這堂課如何呢？幫助其他人更了解這堂課程',
  title: '填寫評價',
  visible: false,
};

export default RatingModal;

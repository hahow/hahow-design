import { action } from '@storybook/addon-actions';
import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { Alert } from 'antd';
import React, { Fragment, useState } from 'react';

import { Button, RatingModal } from '../src';

export default {
  component: RatingModal,
  decorators: [withKnobs],
  title: 'RatingModal',
};

export const Basic = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  return (
    <Fragment>
      <Button onClick={showModal}>Open Rating Modal</Button>
      <RatingModal onCancel={handleCancel} visible={visible} />
    </Fragment>
  );
};

export const Playground = () => (
  <Fragment>
    <Alert
      message="注意"
      description="切換至 Canvas tab 即可透過 Knobs 調整 props，以及 Actions 查看 callback function 的 payload"
      type="warning"
      showIcon
    />
    <RatingModal
      onCancel={action('onCancel')}
      onRatingChange={action('onRatingChange')}
      onReviewSubmit={action('onReviewSubmit')}
      rating={select('rating', [null, 1, 2, 3, 4, 5], null)}
      review={object('review', { title: 'Hello World!', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' })}
      reviewFormDescription={text('reviewFormDescription', '內容（選填）')}
      reviewFormDescriptionPlaceholder={text('reviewFormDescriptionPlaceholder', '這堂課哪些地方對你來說最有幫助呢？有哪些特別有收穫的地方呢？和其他人分享你的學習心得吧')}
      reviewFormTitle={text('reviewFormTitle', '標題（選填）')}
      reviewFormTitlePlaceholder={text('reviewFormTitlePlaceholder', '用一句話總結你的心得吧')}
      subtitle={text('subtitle', '你覺得這堂課如何呢？幫助其他人更了解這堂課程')}
      title={text('title', '填寫評價')}
      visible={boolean('visible', false)}
    />
  </Fragment>
);

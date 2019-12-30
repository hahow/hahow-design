import { action } from '@storybook/addon-actions';
import { boolean, color, number, select, text, withKnobs } from '@storybook/addon-knobs';
import React, { Fragment } from 'react';

import { Rate } from '../src';

export default {
  title: 'Rate',
  decorators: [withKnobs],
  component: Rate,
};

export const Basic = () => (
  <Rate
    allowClear={boolean('allowClear', true)}
    autoFocus={boolean('autoFocus', false)}
    count={number('count', 5)}
    firstColor={color('firstColor', '#ffb940')}
    gutter={number('gutter', 8)}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onHoverChange={action('onHoverChange')}
    onKeyDown={action('onKeyDown')}
    secondColor={color('secondColor', 'rgba(0, 0, 0, 0.25)')}
    size={number('size', 36)}
  />
);

export const HalfStar = () => (
  <Rate
    allowHalf
    defaultValue={2.5}
  />
);

export const ReadOnly = () => (
  <Rate
    disabled
    defaultValue={3}
  />
);

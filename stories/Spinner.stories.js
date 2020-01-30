/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import {
  number, boolean, text, withKnobs,
} from '@storybook/addon-knobs';
import React from 'react';

import { Spinner } from '../src';

export default {
  title: 'Spinner',
  decorators: [withKnobs],
  component: Spinner,
};

export const Playground = () => (
  <div>
    <Spinner
      className={text('className', 'my-class')}
      inverse={boolean('inverse', false)}
      size={number('size', 48)}
    />
  </div>
);

/**
 * 預設版本
 */
export const Basic = () => (
  <div>
    <Spinner />
  </div>
);

/**
 * 白色版本，適用深色背景，例如按鈕
 */
export const Inverse = () => (
  <div style={{ background: '#00CCB4' }}>
    <Spinner inverse />
  </div>
);

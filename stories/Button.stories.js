import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Button } from '../src';

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'Button',
};

export const Primary = () => (
  <Button
    block={boolean('block', false)}
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    href={text('href')}
    htmlType={text('htmlType', 'button')}
    icon={select('icon', [null, 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    loading={boolean('loading', false)}
    onClick={action('onClick')}
    size={select('size', ['default', 'large'])}
    type={select('type', [null, 'link', 'plain', 'transparent', 'whiteThin'])}
  >
    繼續上課
  </Button>
);
export const Secondary = () => (
  <Button brand="secondary">
    繼續上課
  </Button>
);
export const Plain = () => (
  <Button type="plain">
    繼續上課
  </Button>
);
export const Transparent = () => (
  <Button type="transparent">
    我的教室
  </Button>
);
export const WhiteThin = () => (
  <Button type="whiteThin">
    下次再說
  </Button>
);
export const Link = () => (
  <Button type="link">
    全部下載
  </Button>
);

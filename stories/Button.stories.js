import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Button } from '../src';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Primary = () => (
  <Button
    block={boolean('block', false)}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    size={select('size', [null, 'large'])}
  >
    繼續上課
  </Button>
);
export const Secondary = () => (
  <Button
    block={boolean('block', false)}
    brand="secondary"
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    size={select('size', [null, 'large'])}
  >
    繼續上課
  </Button>
);
export const Plain = () => (
  <Button
    block={boolean('block', false)}
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    type="plain"
  >
    繼續上課
  </Button>
);
export const Transparent = () => (
  <Button
    block={boolean('block', false)}
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    type="transparent"
  >
    我的教室
  </Button>
);
export const WhiteThin = () => (
  <Button
    block={boolean('block', false)}
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    type="whiteThin"
  >
    下次再說
  </Button>
);
export const Link = () => (
  <Button
    block={boolean('block', false)}
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    iconPos={select('iconPos', ['left', 'right'])}
    type="link"
  >
    全部下載
  </Button>
);

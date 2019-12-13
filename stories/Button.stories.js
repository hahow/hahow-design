import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import Button from '../src/Button';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Primary = () => (
  <Button
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    size={select('size', [null, 'large'])}
  >
    繼續上課
  </Button>
);
export const Secondary = () => (
  <Button
    brand="secondary"
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    size={select('size', [null, 'large'])}
  >
    繼續上課
  </Button>
);
export const Plain = () => (
  <Button
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    type="plain"
  >
    繼續上課
  </Button>
);
export const Transparent = () => (
  <Button
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    type="transparent"
  >
    我的教室
  </Button>
);
export const WhiteThin = () => (
  <Button
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    type="whiteThin"
  >
    下次再說
  </Button>
);
export const Link = () => (
  <Button
    brand={select('brand', ['primary', 'secondary'])}
    disabled={boolean('disabled', false)}
    icon={select('icon', ['', 'search', 'star'])}
    type="link"
  >
    全部下載
  </Button>
);

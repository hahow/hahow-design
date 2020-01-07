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
  <Button>
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
export const Playground = () => {
  const block = boolean('block', true);
  const brand = select('brand', ['primary', 'secondary']);
  const disabled = boolean('disabled', false);
  const href = text('href');
  const htmlType = text('htmlType', 'button');
  const icon = select('icon', [null, 'search', 'star'], 'star');
  const iconPos = select('iconPos', ['left', 'right']);
  const loading = boolean('loading', false);
  const onClick = action('onClick');
  const size = select('size', ['default', 'large'], 'large');
  const testId = text('testId', '');
  const type = select('type', [null, 'link', 'plain', 'transparent', 'whiteThin']);

  return (
    <Button
      block={block}
      brand={brand}
      disabled={disabled}
      href={href}
      htmlType={htmlType}
      icon={icon}
      iconPos={iconPos}
      loading={loading}
      onClick={onClick}
      size={size}
      testId={testId}
      type={type}
    >
      繼續上課
    </Button>
  );
};
Playground.story = {
  parameters: {
    docs: {
      storyDescription: '切換至 **Canvas** tab 即可透過 **Knobs** 調整 `props`，以及 **Actions** 查看 callback function 的 payload',
    },
  },
};

import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { Table } from 'antd';
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
export const AllButtons = () => {
  const block = boolean('block', false);
  const disabled = boolean('disabled', false);
  const icon = select('icon', [null, 'search', 'star'], null);
  const iconPos = select('iconPos', ['left', 'right']);
  const size = select('size', ['default', 'large'], 'default');

  const renderButton = (props) => (
    <Button
      block={block}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      size={size}
      {...props}
    />
  );

  return (
    <Table
      columns={[
        {
          title: 'type',
          dataIndex: 'type',
          key: 'type',
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'brand="primary"',
          dataIndex: 'primary',
          key: 'primary',
          render: renderButton,
        },
        {
          title: 'brand="secondary"',
          dataIndex: 'secondary',
          key: 'secondary',
          render: renderButton,
        },
      ]}
      dataSource={[
        {
          key: 'default',
          primary: {
            children: '繼續上課',
          },
          secondary: {
            brand: 'secondary',
            children: '繼續上課',
          },
          type: 'default',
        },
        {
          key: 'link',
          primary: {
            children: '全部下載',
            type: 'link',
          },
          secondary: {
            brand: 'secondary',
            children: '全部下載',
            type: 'link',
          },
          type: 'link',
        },
        {
          key: 'plain',
          primary: {
            children: '繼續上課',
            type: 'plain',
          },
          secondary: {
            brand: 'secondary',
            children: '繼續上課',
            type: 'plain',
          },
          type: 'plain',
        },
        {
          key: 'transparent',
          primary: {
            children: '我的教室',
            type: 'transparent',
          },
          secondary: {
            brand: 'secondary',
            children: '我的教室',
            type: 'transparent',
          },
          type: 'transparent',
        },
        {
          key: 'whiteThin',
          primary: {
            children: '下次再說',
            type: 'whiteThin',
          },
          secondary: {
            brand: 'secondary',
            children: '下次再說',
            type: 'whiteThin',
          },
          type: 'whiteThin',
        },
      ]}
      pagination={false}
    />
  );
};
AllButtons.story = {
  parameters: {
    docs: {
      storyDescription: '`props.type` 和 `props.brand` 兩個維度展示所有按鈕，可以透過 **Knobs** 一次調整所有樣式，方便檢查問題',
    },
  },
};
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

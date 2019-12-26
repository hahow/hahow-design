import { action } from '@storybook/addon-actions';
import { boolean, number, object, withKnobs } from '@storybook/addon-knobs';
import { Empty as AntEmpty, Menu } from 'antd';
import React from 'react';

import { MenuList } from '../src';

const menuListData = [
  {
    title: '我是 SubMenu 1',
    data: [
      {
        title: '我是 ItemGroup 1',
        data: [
          {
            text: '我是 Item 1',
          },
          {
            text: '我是 Item 2',
          },
          {
            text: '我是 Item 3',
          },
          {
            text: '我是 Item 4',
          },
          {
            text: '我是 Item 5',
          },
        ],
      },
      {
        title: '我是 ItemGroup 2',
        data: [
          {
            text: '我是 Item 6',
          },
          {
            text: '我是 Item 7',
          },
          {
            text: '我是 Item 8',
          },
        ],
      },
    ],
  },
  {
    title: '我是 SubMenu 2',
    data: [
      {
        title: '我是 ItemGroup 3',
        data: [
          {
            text: '我是 Item 9',
          },
          {
            text: '我是 Item 10',
          },
          {
            text: '我是 Item 11',
          },
          {
            text: '我是 Item 12',
          },
        ],
      },
    ],
  },
];

export default {
  title: 'MenuList',
  decorators: [withKnobs],
};

export const Basic = () => (
  <MenuList
    data={object('data', menuListData)}
    onItemClick={action('onItemClick')}
  />
);

export const Customize = () => (
  <MenuList
    data={object('data', menuListData)}
    expandButtonText={collapseLength => `我有 ${collapseLength} 個 items 可以展開喔`}
    itemGroupContainerStyle={{}}
    numOfShowItems={number('numOfShowItems', 3)}
    onItemClick={action('onItemClick')}
    openAllSubMenu={boolean('openAllSubMenu', true)}
    renderExpandButton={({ children, toggleProps }) => (
      <button type="button" {...toggleProps} style={{ color: 'red' }}>
        {children}
      </button>
    )}
    renderItem={({
      key,
      onItemClick,
      text,
      ...rest
    }) => (
      <Menu.Item
        key={key}
        onClick={onItemClick}
        style={{ backgroundColor: '#fbd38d' }}
        {...rest}
      >
        {text}
      </Menu.Item>
    )}
    renderItemGroupTitle={({ title }) => <div style={{ backgroundColor: '#f6ad55' }}>{title}</div>}
    renderSubMenuTitle={({ title }) => <div style={{ backgroundColor: '#ed8936' }}>{title}</div>}
    subMenuStyle={{ backgroundColor: '#fbd38d' }}
  />
);

export const Empty = () => (
  <MenuList
    data={object('data', [])}
    renderEmpty={AntEmpty}
  />
);

import { action } from '@storybook/addon-actions';
import { boolean, number, object, select, withKnobs } from '@storybook/addon-knobs';
import { Empty as AntEmpty, Menu } from 'antd';
import React from 'react';

import SearchList from '../src/SearchList';

const data = [
  {
    title: '社群互動八大原則',
    position: 1,
    data: [
      {
        title: '看懂社群互動的原則｜社群是什麼？找到社群的互動原則！',
        data: [
          {
            start: 29,
            text: '今天我們要持續挖掘受眾',
          },
          {
            start: 41,
            text: '我們說到了 受眾會在乎的地方有哪些',
          },
          {
            start: 91,
            text: '會讓受眾與他人連結情感的因素',
          },
          {
            start: 145,
            text: '會讓受眾與他人連結情感的因素 2',
          },
          {
            start: 170,
            text: '會讓受眾與他人連結情感的因素 3',
          },
        ],
        lessonId: 1,
        position: 1,
        completionStatus: 'NOT_VISITED',
        videoLengthInSeconds: 797,
      },
      {
        title: '看懂社群互動的原則｜社群是什麼？找到社群的互動原則！',
        data: [
          {
            start: 29,
            text: '一個是 你的受眾會在乎他們在社交上的表現嗎',
          },
          {
            start: 41,
            text: '我們說到了 受眾會在乎的地方有哪些',
          },
          {
            start: 91,
            text: '是受眾四個深層的決策利益',
          },
        ],
        lessonId: 2,
        position: 2,
        completionStatus: 'DONE',
        videoLengthInSeconds: 590,
      },
    ],
  },
  {
    title: '表達：怎麼說？',
    position: 5,
    data: [
      {
        title: '對不同受眾說不同的話：同一意思我們換個角度說',
        data: [],
        lessonId: 5,
        position: 3,
        completionStatus: 'NOT_COMPLETED',
        videoLengthInSeconds: 368,
      },
      {
        title: '受眾的定義範圍：怎麼尋找受眾',
        data: [],
        lessonId: 6,
        position: 4,
        completionStatus: 'NOT_VISITED',
        videoLengthInSeconds: 368,
      },
    ],
  },
];

export default {
  title: 'SearchList',
  decorators: [withKnobs],
};

export const DarkTheme = () => (
  <SearchList
    data={object('data', data)}
    onItemClick={action('onItemClick')}
    onLessonTitleClick={action('onLessonTitleClick')}
    onSearch={action('onSearch')}
  />
);

export const LightTheme = () => (
  <SearchList
    data={object('data', data)}
    onItemClick={action('onItemClick')}
    onLessonTitleClick={action('onLessonTitleClick')}
    onSearch={action('onSearch')}
    theme="light"
  />
);
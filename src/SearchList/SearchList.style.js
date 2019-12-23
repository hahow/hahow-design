import { Input } from 'antd';
import cond from 'lodash/cond';
import constant from 'lodash/constant';
import isMatch from 'lodash/isMatch';
import stubTrue from 'lodash/stubTrue';
import React from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';

import lightSelector from './utils/lightSelector';
import MenuList from '../MenuList';

const { Search } = Input;

const computeUnhighlightColor = cond([
  [lightSelector, constant('rgba(0, 0, 0, 0.65)')],
  [stubTrue, constant('#ffffff')],
]);

export const StyledInputWrapper = styled.div`
  background-color: #263238;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  padding: 16px 24px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'background-color: #f0f2f5'};
  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'border-bottom: solid 1px rgba(0, 0, 0, 0.15)'};

  @media (max-width: 479px) {
    padding: 16px;
  }
`;

export const StyledSearch = styled(Search)`
  .ant-input {
    background-color: #ffffff;
    border: solid 1px #979797;
    border-radius: 14px;
  }
`;

export const StyledListContainer = styled.div`
  height: 100vh;
  overflow: auto;

  ${({ theme: { theme } }) => (theme === 'light') && 'background-color: #ffffff'};
`;

export const StyledResultWrapper = styled.div`
  background-color: #263238;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
  line-height: 1.57;
  padding: 16px 24px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'background-color: #f0f2f5'};
  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: rgba(0, 0, 0, 0.65)'};

  @media (max-width: 479px) {
    padding: 16px;
  }
`;

export const StyledMenuList = styled(MenuList).attrs(({ theme }) => {
  const isLightMode = isMatch(theme, { theme: 'light' });

  return {
    itemGroupDividerStyle: {
      borderBottom: isLightMode ? '1px solid rgba(0, 0, 0, 0.12)' : '1px solid rgba(255, 255, 255, 0.12)',
    },
    itemGroupListStyle: {
      padding: '16px 0',
    },
    menuStyle: {
      backgroundColor: isLightMode ? '#ffffff' : '#263238',
    },
    subMenuStyle: {
      backgroundColor: isLightMode ? '#ffffff' : '#37474f',
    },
  };
})``;

export const StyledHighlighter = styled(({ isHover, ...rest }) => (
  <Highlighter {...rest} />
)).attrs((props) => {
  const isLightMode = (isMatch(props, { theme: { theme: 'light' } }));

  return {
    highlightStyle: {
      backgroundColor: 'transparent',
      color: isLightMode ? '#00ccb4' : '#00ffbd',
      fontSize: 14,
      lineHeight: 1.71,
      padding: 0,
    },
    unhighlightStyle: {
      color: computeUnhighlightColor(props),
      fontSize: 14,
      lineHeight: 1.71,
    },
  };
})``;

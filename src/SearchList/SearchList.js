import noop from 'lodash/noop';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import React, { Fragment, memo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ExpandButton from './components/ExpandButton';
import ItemGroupTitle from './components/ItemGroupTitle';
import MenuItem from './components/MenuItem';
import Empty from './components/Empty';
import SubMenuTitle from './components/SubMenuTitle';
import {
  StyledInputWrapper,
  StyledListContainer,
  StyledMenuList,
  StyledResultWrapper,
  StyledSearch,
} from './SearchList.style';

const SearchList = ({
  data,
  onItemClick,
  onLessonTitleClick,
  onSearch,
  theme,
}) => {
  const [term, setTerm] = useState('');
  const handleSearch = (value) => {
    onSearch(value);
    setTerm(value);
  };

  const handleItemClick = (event, payload) => {
    // 根據 Menu.Item 的 key 找出字幕所在單元的 lessonId
    const [, subIndex, groupIndex] = event.key.match(/sub-(\w+)-g-(\w+)-i-(\w+)/);
    const { lessonId } = data[subIndex].data[groupIndex];

    onItemClick({
      lessonId,
      ...payload,
    });
  };

  const handleItemGroupTitleClick = (event, payload) => {
    onLessonTitleClick(payload);
  };

  const showEmpty = (data.length === 0 && term === '');
  const showNotFound = (data.length === 0 && term !== '');
  const showList = (data.length > 0);

  const totalLesson = data.reduce((total, chapter) => total + chapter.data.length, 0);

  const renderItem = props => (
    <MenuItem
      data-test-id="searchlist-item"
      term={term}
      theme={theme}
      {...props}
    />
  );
  const renderItemGroupTitle = props => (
    <ItemGroupTitle
      testId="searchlist-group"
      term={term}
      theme={theme}
      {...props}
    />
  );
  const renderSubMenuTitle = props => (
    <SubMenuTitle
      theme={theme}
      {...props}
    />
  );
  const renderExpandButton = props => (
    <ExpandButton
      testId="searchlist-expand-button"
      theme={theme}
      {...props}
    />
  );

  return (
    <ThemeProvider theme={{ theme }}>
      <Fragment>
        <StyledInputWrapper>
          <StyledSearch
            data-test-id="searchlist-input"
            allowClear
            onSearch={handleSearch}
            placeholder="搜尋課程內容"
          />
        </StyledInputWrapper>
        <StyledListContainer>
          {
            showEmpty && (
              <Empty
                icon="search"
                opacity={0.25}
                theme={theme}
                title="搜尋課程單元、逐字稿"
              />
            )
          }
          {
            showNotFound && (
              <Empty
                icon="search"
                subTitle="也許換個關鍵字試試看？"
                theme={theme}
                title={`哎呀，找不到「${term}」相關內容`}
              />
            )
          }
          {
            showList && (
              <Fragment>
                <StyledResultWrapper>
                  {`共 ${totalLesson} 個單元與「${term}」相關`}
                </StyledResultWrapper>
                <StyledMenuList
                  collapseItems={3}
                  data={data}
                  onItemClick={handleItemClick}
                  onItemGroupTitleClick={handleItemGroupTitleClick}
                  renderExpandButton={renderExpandButton}
                  renderItem={renderItem}
                  renderItemGroupTitle={renderItemGroupTitle}
                  renderSubMenuTitle={renderSubMenuTitle}
                />
              </Fragment>
            )
          }
        </StyledListContainer>
      </Fragment>
    </ThemeProvider>
  );
};

SearchList.propTypes = {
  data: arrayOf(shape({
    /** 章節標題 */
    title: string,
    /** 第幾章（1 base） */
    position: number,
    data: arrayOf(shape({
      /** 單元標題 */
      title: string,
      data: arrayOf(shape({
        /** 字幕時間（秒） */
        start: number,
        /** 字幕文字 */
        text: string,
      })).isRequired,
      lessonId: number,
      /** 第幾單元（1 base） */
      position: number,
      /** 單元長度（秒） */
      videoLengthInSeconds: number,
      /** 單元狀態 [true=已完成|false=未完成|undefined=未開始] */
      finished: bool,
    })).isRequired,
  })),
  onItemClick: func,
  onLessonTitleClick: func,
  onSearch: func,
  theme: string,
};

SearchList.defaultProps = {
  data: [],
  onItemClick: noop,
  onLessonTitleClick: noop,
  onSearch: noop,
  theme: 'dark',
};

export default memo(SearchList);

import formatDuration from 'format-duration';
import noop from 'lodash/noop';
import {
  bool,
  func,
  number,
  oneOf,
  string,
} from 'prop-types';
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import useHover from '../../utils/useHover';
import { StyledHighlighter } from '../../SearchList.style';
import videoCompletionStatus from './constants/videoCompletionStatus';
import renderIcon from './utils/renderIcon';
import {
  StyledDescription,
  StyledIconContainer,
  StyledTextContainer,
  StyledTitleContainer,
} from './ItemGroupTitle.style';

const ItemGroupTitle = ({
  testId,
  completionStatus,
  onClick,
  position,
  showDivider,
  term,
  theme,
  title,
  videoLengthInSeconds,
}) => {
  const { getOnMouseHover, isHover } = useHover();

  const textToHighlight = `單元 ${position} - ${title}`;
  const formatted = formatDuration(videoLengthInSeconds * 1000, { leading: true });

  return (
    <ThemeProvider theme={{ theme }}>
      <StyledTitleContainer
        data-test-id={testId}
        isHover={isHover}
        onClick={onClick}
        {...getOnMouseHover()}
      >
        <StyledIconContainer>
          {renderIcon(completionStatus)}
        </StyledIconContainer>
        <StyledTextContainer showDivider={showDivider}>
          <StyledHighlighter
            autoEscape
            isHover={isHover}
            searchWords={[term]}
            textToHighlight={textToHighlight}
          />
          <StyledDescription isHover={isHover}>
            {formatted}
          </StyledDescription>
        </StyledTextContainer>
      </StyledTitleContainer>
    </ThemeProvider>
  );
};

ItemGroupTitle.propTypes = {
  testId: string,
  completionStatus: oneOf(Object.values(videoCompletionStatus)),
  onClick: func,
  position: number,
  showDivider: bool,
  term: string,
  title: string,
  videoLengthInSeconds: number,
};

ItemGroupTitle.defaultProps = {
  testId: '',
  completionStatus: videoCompletionStatus.NOT_VISITED,
  onClick: noop,
  position: 0,
  showDivider: true,
  term: '',
  theme: 'dark',
  title: '',
  videoLengthInSeconds: 0,
};

export default memo(ItemGroupTitle);

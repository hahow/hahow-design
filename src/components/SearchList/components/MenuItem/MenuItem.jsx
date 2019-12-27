import formatDuration from 'format-duration';
import { number, string } from 'prop-types';
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledHighlighter } from '../../SearchList.style';
import {
  StyledContainer,
  StyledMenuItem,
  StyledStartText,
  StyledTextContainer,
} from './MenuItem.style';

const MenuItem = ({
  start,
  term,
  text,
  theme,
  ...rest
}) => (
  <ThemeProvider theme={{ theme }}>
    <StyledMenuItem {...rest}>
      <StyledContainer>
        <StyledTextContainer>
          <StyledStartText>
            {formatDuration(start * 1000, { leading: true })}
          </StyledStartText>
          <StyledHighlighter
            autoEscape
            searchWords={[term]}
            textToHighlight={text}
          />
        </StyledTextContainer>
      </StyledContainer>
    </StyledMenuItem>
  </ThemeProvider>
);

MenuItem.propTypes = {
  start: number,
  term: string,
  text: string,
  theme: string,
};

MenuItem.defaultProps = {
  start: '',
  term: '',
  text: '',
  theme: 'dark',
};

export default memo(MenuItem);

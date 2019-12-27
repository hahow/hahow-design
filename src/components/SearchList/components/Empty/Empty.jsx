import { number, string } from 'prop-types';
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  StyledContainer,
  StyledIcon,
  StyledOpacityContainer,
  StyledSubTitle,
  StyledTitle,
} from './Empty.style';

const Empty = ({
  icon,
  opacity,
  subTitle,
  theme,
  title,
}) => (
  <ThemeProvider theme={{ theme }}>
    <StyledContainer>
      <StyledOpacityContainer opacity={opacity}>
        <StyledTitle>
          {title}
        </StyledTitle>
        {
          subTitle && (
            <StyledSubTitle>
              {subTitle}
            </StyledSubTitle>
          )
        }
        <StyledIcon type={icon} />
      </StyledOpacityContainer>
    </StyledContainer>
  </ThemeProvider>
);

Empty.propTypes = {
  icon: string,
  opacity: number,
  subTitle: string,
  theme: string,
  title: string,
};

Empty.defaultProps = {
  icon: 'search',
  opacity: 1,
  subTitle: null,
  theme: 'dark',
  title: '',
};

export default memo(Empty);

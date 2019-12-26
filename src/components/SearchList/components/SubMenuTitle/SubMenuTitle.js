import formatDuration from 'format-duration';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import useHover from '../../utils/useHover';
import {
  StyledDescription,
  StyledIcon,
  StyledTitleContainer,
  StyledTitleText,
} from './SubMenuTitle.style';

const SubMenuTitle = ({
  data,
  open,
  position,
  theme,
  title,
}) => {
  const { getOnMouseHover, isHover } = useHover();

  const iconType = open ? 'up' : 'down';
  const totalVideoLengthInSeconds = data.reduce(
    (acc, { videoLengthInSeconds = 0 }) => acc + videoLengthInSeconds,
    0,
  );
  const formatted = formatDuration(totalVideoLengthInSeconds * 1000, { leading: true });

  return (
    <ThemeProvider theme={{ theme }}>
      <StyledTitleContainer {...getOnMouseHover()}>
        <div>
          <StyledTitleText isHover={isHover}>
            {`第 ${position} 章 - ${title}`}
          </StyledTitleText>
          <StyledDescription isHover={isHover}>
            {`共 ${data.length} 單元 ${formatted}`}
          </StyledDescription>
        </div>
        <StyledIcon type={iconType} />
      </StyledTitleContainer>
    </ThemeProvider>
  );
};

SubMenuTitle.propTypes = {
  data: arrayOf(shape({
    videoLengthInSeconds: number.isRequired,
  })),
  open: bool,
  position: number,
  title: string,
};

SubMenuTitle.defaultProps = {
  data: [],
  open: true,
  position: 0,
  theme: 'dark',
  title: '',
};

export default memo(SubMenuTitle);

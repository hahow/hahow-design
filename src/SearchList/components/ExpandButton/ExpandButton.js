import {
  node,
  shape,
  string,
} from 'prop-types';
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledButton } from './ExpandButton.style';

const ExpandButton = ({
  testId,
  className,
  children,
  theme,
  toggleProps,
}) => (
  <ThemeProvider theme={{ theme }}>
    <StyledButton data-test-id={testId} className={className} {...toggleProps}>
      {children}
    </StyledButton>
  </ThemeProvider>
);

ExpandButton.propTypes = {
  testId: string,
  className: string,
  children: node,
  toggleProps: shape(),
};

ExpandButton.defaultProps = {
  testId: '',
  className: '',
  children: node,
  theme: 'dark',
  toggleProps: shape(),
};

export default memo(ExpandButton);

import cond from 'lodash/cond';
import matches from 'lodash/matches';
import stubTrue from 'lodash/stubTrue';
import React from 'react';

import videoCompletionStatus from '../../constants/videoCompletionStatus';
import { StyledCheckIcon, StyledToBePlayIcon, StyledUnfinishedIcon } from '../../ItemGroupTitle.style';

const { DONE, NOT_COMPLETED } = videoCompletionStatus;

const renderIcon = cond([
  [matches(DONE), () => <StyledCheckIcon />],
  [matches(NOT_COMPLETED), () => <StyledUnfinishedIcon />],
  [stubTrue, () => <StyledToBePlayIcon />],
]);

export default renderIcon;

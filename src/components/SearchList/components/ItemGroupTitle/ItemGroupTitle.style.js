import cond from 'lodash/cond';
import constant from 'lodash/constant';
import matches from 'lodash/matches';
import noop from 'lodash/noop';
import stubTrue from 'lodash/stubTrue';
import styled from 'styled-components';

import lightHoverSelector from '../../utils/lightHoverSelector';
import lightSelector from '../../utils/lightSelector';
import CheckIcon from './assets/icon-check.svg';
import ToBePlayIcon from './assets/icon-tobeplay.svg';
import UnfinishedIcon from './assets/icon-unfinished.svg';

const computeDivider = cond([
  [matches({ showDivider: false }), noop],
  [matches({ theme: { theme: 'light' } }), constant('border-bottom: solid 1px rgba(0, 0, 0, 0.15)')],
  [stubTrue, constant('border-bottom: solid 1px rgba(255, 255, 255, 0.12)')],
]);

const computeDescriptionColor = cond([
  [lightSelector, constant('color: rgba(0, 0, 0, 0.25)')],
  [stubTrue, constant('color: rgba(255, 255, 255, 0.45)')],
]);

const computeContainerBgColor = cond([
  [lightHoverSelector, constant('background-color: rgba(0, 0, 0, 0.04)')],
  [lightSelector, constant('background-color: #ffffff')],
  [stubTrue, constant('background-color: #37474f')],
]);

export const StyledDescription = styled.div`
  font-size: 14px;
  line-height: 1.71;
  margin-top: 8px;

  ${(props) => computeDescriptionColor(props)};
`;

export const StyledIconContainer = styled.div`
  margin-left: -4px;
  margin-right: 16px;

  @media (max-width: 479px) {
    margin-left: 0;
  }
`;

export const StyledTextContainer = styled.div`
  padding-bottom: 16px;
  width: 100%;

  ${(props) => computeDivider(props)};
`;

export const StyledTitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px 24px 0;

  ${(props) => computeContainerBgColor(props)};

  @media (max-width: 479px) {
    padding: 16px 16px 0;
  }
`;

export const StyledCheckIcon = styled(CheckIcon)`
  path {
    ${({ theme: { theme } }) => (theme === 'light') && 'fill: #00ccb4'};
  }
`;

export const StyledToBePlayIcon = styled(ToBePlayIcon)`
  path {
    ${({ theme: { theme } }) => (theme === 'light') && 'fill: rgba(0, 0, 0, 0.65)'};
  }
`;

export const StyledUnfinishedIcon = styled(UnfinishedIcon)`
  circle {
    ${({ theme: { theme } }) => (theme === 'light') && 'stroke: #00ccb4'};
  }
`;

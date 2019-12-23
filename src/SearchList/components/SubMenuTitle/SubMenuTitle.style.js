import { Icon } from 'antd';
import cond from 'lodash/cond';
import constant from 'lodash/constant';
import isMatch from 'lodash/isMatch';
import stubTrue from 'lodash/stubTrue';
import styled from 'styled-components';

import lightHoverSelector from '../../utils/lightHoverSelector';
import lightSelector from '../../utils/lightSelector';

const computeTitleColor = cond([
  [lightHoverSelector, constant('color: rgba(0, 0, 0, 0.85)')],
  [lightSelector, constant('color: rgba(0, 0, 0, 0.65)')],
  [stubTrue, constant('color: rgba(255, 255, 255, 0.85)')],
]);

const computeDescriptionColor = cond([
  [lightHoverSelector, constant('color: rgba(0, 0, 0, 0.65)')],
  [lightSelector, constant('color: rgba(0, 0, 0, 0.45)')],
  [stubTrue, constant('color: rgba(255, 255, 255, 0.45)')],
]);

export const StyledDescription = styled.div`
  font-size: 14px;
  line-height: 1.71;
  margin-top: 3.4px;

  ${props => computeDescriptionColor(props)};
`;

export const StyledIcon = styled(Icon)`
  color: #ffffff;
  margin-right: 0;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: rgba(0, 0, 0, 0.65)'};
`;

export const StyledTitleContainer = styled.div`
  align-items: center;
  background-color: #263238;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'background-color: #e6eaee'};

  @media (max-width: 479px) {
    padding: 16px;
  }
`;

export const StyledTitleText = styled.div`
  font-size: 16px;
  line-height: 1.75;

  ${props => computeTitleColor(props)};
`;

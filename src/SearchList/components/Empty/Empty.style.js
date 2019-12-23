import { Icon } from 'antd';
import isMatch from 'lodash/isMatch';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  align-items: center;
  background-color: #263238;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const StyledOpacityContainer = styled.div`
  text-align: center;

  ${({ opacity }) => `opacity: ${opacity}`};
`;

export const StyledTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: rgba(0, 0, 0, 0.65)'};
`;

export const StyledSubTitle = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 8px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: rgba(0, 0, 0, 0.45)'};
`;

export const StyledIcon = styled(Icon)`
  color: #ffffff;
  font-size: 48px;
  margin-top: 8px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: rgba(0, 0, 0, 0.25)'};
`;

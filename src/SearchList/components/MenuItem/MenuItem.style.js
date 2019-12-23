import { Menu } from 'antd';
import isMatch from 'lodash/isMatch';
import styled from 'styled-components';

export const StyledMenuItem = styled(Menu.Item).attrs({
  style: {
    marginLeft: '24px',
    marginRight: '24px',
    // TODO: md:mx-0
  },
})``;

export const StyledContainer = styled.div`
  ${({ theme }) => isMatch(theme, { theme: 'dark' }) && 'background-color: #37474f'};
`;

export const StyledStartText = styled.div`
  color: #ffffff;
  font-size: 14px;
  line-height: 1.71;
  margin-right: 16px;
  padding-left: 36px;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: #37474f'};

  @media (max-width: 991px) {
    padding-left: 60px;
  }

  @media (max-width: 479px) {
    padding-left: 24px;
  }
`;

export const StyledTextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  padding: 4px 0;
  white-space: pre-wrap;

  :hover {
    background-color: rgba(255, 255, 255, 0.05);

    ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'background-color: rgba(0, 0, 0, 0.04)'};
  }
`;

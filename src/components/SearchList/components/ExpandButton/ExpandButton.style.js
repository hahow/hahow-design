import isMatch from 'lodash/isMatch';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: #00ccb4;
  font-size: 14px;
  line-height: normal;
  margin-left: 60px;
  margin-top: 8px;
  padding: 0;

  ${({ theme }) => isMatch(theme, { theme: 'light' }) && 'color: #00ccb4'};

  :hover {
    color: #23d9bd;
  }

  :active {
    color: #08af9f;
  }

  @media (max-width: 479px) {
    margin-left: 24px;
  }
`;

export default StyledButton;

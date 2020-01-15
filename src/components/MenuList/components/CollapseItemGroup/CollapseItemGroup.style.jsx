import { Menu } from 'antd';
import styled from 'styled-components';
import React from 'react';

export const StyledCollapseItemGroup = styled(({
  collapseProps,
  children, ...rest
}) => (
  <Menu.ItemGroup
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...collapseProps}
  >
    {children}
  </Menu.ItemGroup>
))`
  & .ant-menu-item-group-list {
    padding: 0 !important;
  }
`;

export default StyledCollapseItemGroup;

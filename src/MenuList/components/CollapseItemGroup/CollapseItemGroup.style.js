import { Menu } from 'antd';
import styled from 'styled-components';
import React from 'react';

export const StyledCollapseItemGroup = styled(({
  children,
  collapseProps,
  ...rest
}) => (
  <Menu.ItemGroup {...rest} {...collapseProps}>
    {children}
  </Menu.ItemGroup>
))`
  & .ant-menu-item-group-list {
    padding: 0 !important;
  }
`;

export default StyledCollapseItemGroup;

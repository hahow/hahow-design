import { Menu } from 'antd';
import styled from 'styled-components';
import React from 'react';

export const StyledMenu = styled(({
  className, children, inlineIndent, mode, onOpenChange, openKeys, selectable,
}) => (
  <Menu
    className={className}
    inlineIndent={inlineIndent}
    mode={mode}
    onOpenChange={onOpenChange}
    openKeys={openKeys}
    selectable={selectable}
  >
    {children}
  </Menu>
))`
  &.ant-menu {
    /** 移除 Menu 預設樣式 */
    border-width: 0;
  
    ${({ menuStyle }) => ({ ...menuStyle })};
  
    /** 移除 Menu.SubMenu title 預設樣式 */
    .ant-menu-submenu > .ant-menu-submenu-title {
      height: auto;
      line-height: normal;
      margin: 0;
      padding: 0;
      width: auto;
    }
  
    /** 移除 Menu.SubMenu 右方的收合圖示 */
    i.ant-menu-submenu-arrow {
      ::before {
        display: none;
      }
      ::after {
        display: none;
      }
    }
  
    /** 移除 Menu.ItemGroup 預設樣式 */
    .ant-menu-item-group-list {
      line-height: initial;
  
      &:not(:empty) {
        ${({ itemGroupListStyle }) => ({ ...itemGroupListStyle })};
      }
    }
    .ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
      padding: 0;
    }
  
    /** 移除 Menu.Item 預設樣式 */
    li[role=menuitem] {
      height: auto;
      line-height: normal;
      margin: 0;
      padding: 0;
      width: auto;
    }
  
    ul.ant-menu-sub {
      ${({ subMenuStyle }) => ({ ...subMenuStyle })};
    }
  }
`;

export const StyledItemGroup = styled(({
  children,
  itemGroupContainerStyle,
  itemGroupDividerStyle,
  ...rest
}) => (
  <Menu.ItemGroup
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </Menu.ItemGroup>
))`
  ${({ itemGroupContainerStyle }) => ({ ...itemGroupContainerStyle })};

  :not(:last-child) {
    ${({ itemGroupDividerStyle }) => ({ ...itemGroupDividerStyle })};
  }
`;

export const StyledEmptyContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

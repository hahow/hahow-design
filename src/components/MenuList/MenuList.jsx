import { Menu } from 'antd';
import drop from 'lodash/drop';
import includes from 'lodash/includes';
import noop from 'lodash/noop';
import take from 'lodash/take';
import {
  arrayOf, elementType, func, number, shape, string, bool,
} from 'prop-types';
import React, { createElement, memo } from 'react';
import stylePropType from 'react-style-proptype';

import CollapseItemGroup from './components/CollapseItemGroup';
import ExpandButton from './components/ExpandButton';
import ItemGroupTitle from './components/ItemGroupTitle';
import MenuItem from './components/MenuItem';
import SubMenuTitle from './components/SubMenuTitle';
import buildItemGroupKey from './utils/buildItemGroupKey';
import buildItemKey from './utils/buildItemKey';
import buildSubMenuKey from './utils/buildSubMenuKey';
import truncate from './utils/truncate';
import useSubMenu from './utils/useSubMenu';
import {
  StyledEmptyContainer,
  StyledItemGroup,
  StyledMenu,
} from './MenuList.style';

const { SubMenu } = Menu;

const MenuList = ({
  data,
  expandButtonText,
  itemGroupContainerStyle,
  itemGroupDividerStyle,
  itemGroupListStyle,
  menuStyle,
  numOfShowItems,
  onItemClick,
  onItemGroupTitleClick,
  openAllSubMenu,
  renderEmpty,
  renderExpandButton,
  renderItem,
  renderItemGroupTitle,
  renderSubMenuTitle,
  subMenuStyle,
}) => {
  const [openKeys, setOpenKeys] = useSubMenu({ data, openAllSubMenu });

  if (data.length === 0) {
    return (
      <StyledEmptyContainer>
        {createElement(renderEmpty)}
      </StyledEmptyContainer>
    );
  }

  return (
    <StyledMenu
      // Orginal props from Menu
      inlineIndent={0} // Reset antd 的 Menu padding & margin
      mode="inline"
      onOpenChange={setOpenKeys}
      openKeys={openKeys}
      selectable={false}
      // Custom props for styling
      itemGroupListStyle={itemGroupListStyle}
      menuStyle={menuStyle}
      subMenuStyle={subMenuStyle}
    >
      {
        data.map((subMenuItem, index) => {
          const subMenuKey = buildSubMenuKey(index);
          const subMenuTitle = createElement(renderSubMenuTitle, {
            open: includes(openKeys, subMenuKey), // SubMenu 的開合狀態
            ...subMenuItem,
          });

          return (
            <SubMenu
              key={subMenuKey}
              title={subMenuTitle}
            >
              {
                subMenuItem.data.map((groupItem, groupIndex) => {
                  const groupKey = buildItemGroupKey(subMenuKey, groupIndex);

                  const { data: itemData } = groupItem;

                  const collapseData = drop(itemData, numOfShowItems);
                  const collapseLength = collapseData.length;

                  const truncatedCollapseLength = truncate(collapseLength, { length: 99, omission: '+' });

                  const formatedExpandButtonText = expandButtonText
                    ? expandButtonText(truncatedCollapseLength)
                    : `+ 展開 ${collapseLength} 段相關內容`;

                  const showItemGroupTitleDivider = (itemData.length > 0);

                  const handleItemGroupTitleClick = (event) => onItemGroupTitleClick(
                    event, groupItem,
                  );

                  const buildRenderItem = (item, itemIndex) => {
                    const itemKey = buildItemKey(groupKey, itemIndex);
                    const handleItemClick = (event) => onItemClick(event, item);

                    return createElement(renderItem, {
                      key: itemKey,
                      onClick: handleItemClick,
                      ...item,
                    });
                  };

                  const groupTitle = createElement(renderItemGroupTitle, {
                    ...groupItem,
                    onClick: handleItemGroupTitleClick,
                    showDivider: showItemGroupTitleDivider,
                  });

                  return (
                    <StyledItemGroup
                      key={groupKey}
                      title={groupTitle}
                      itemGroupContainerStyle={itemGroupContainerStyle}
                      itemGroupDividerStyle={itemGroupDividerStyle}
                    >
                      {
                        // 預設顯示前 3 筆 items
                        take(itemData, numOfShowItems).map(buildRenderItem)
                      }
                      {
                        // 預設收合超過 3 筆之後的 items
                        collapseLength && (
                          <CollapseItemGroup
                            expandButtonText={formatedExpandButtonText}
                            renderExpandButton={renderExpandButton}
                          >
                            {
                              collapseData.map(
                                (item, idx) => buildRenderItem(item, idx + numOfShowItems),
                              )
                            }
                          </CollapseItemGroup>
                        )
                      }
                    </StyledItemGroup>
                  );
                })
              }
            </SubMenu>
          );
        })
      }
    </StyledMenu>
  );
};

MenuList.propTypes = {
  /** 顯示多少數量的 items（其餘收合） */
  numOfShowItems: number,
  /** Menu 的資料來源 */
  data: arrayOf(shape({
    /** Menu.SubMenu 的 title */
    title: string,
    /** Menu.ItemGroup 的資料來源 */
    data: arrayOf(shape({
      /** Menu.ItemGroup 的 title */
      title: string,
      /** Menu.Item 的資料來源 */
      data: arrayOf(shape).isRequired,
    })).isRequired,
  })).isRequired,
  /**
   * 展開按鈕的文字
   * 注意：類型是函數，第一個參數是被收合的 items 數量
   * 預設文字為 "+ 展開 {{collapseLength}} 段相關內容"
   */
  expandButtonText: func,
  /** 自訂 Menu.ItemGroup 的 style */
  itemGroupContainerStyle: stylePropType,
  /** 自訂 Menu.ItemGroup 的 :not(:last-child) style */
  itemGroupDividerStyle: stylePropType,
  /** 自訂 .ant-menu-item-group-list:not(:empty) 的 style */
  itemGroupListStyle: stylePropType,
  /** 自訂 Menu 的 style */
  menuStyle: stylePropType,
  /**
   * Menu.Item onClick callback
   * 第一個參數為 Menu.Item 預設的 event object
   * 第二個參數為 Item 的 data object
   */
  onItemClick: func,
  /**
   * Menu.ItemGroup title onClick callback
   * 第一個參數為 onClick 預設的 event
   * 第二個參數為 ItemGroup 的 data object
   */
  onItemGroupTitleClick: func,
  /**
   * 當 openAllSubMenu 變為 true，則打開所有 SubMenu
   * 當變為 false，則關閉所有 SubMenu
   */
  openAllSubMenu: bool,
  /** 自訂空資料元件 */
  renderEmpty: elementType,
  /**
   * 自訂展開按鈕元件
   * 參數為 react-collapsed 的 `getToggleProps()`
   */
  renderExpandButton: elementType,
  /**
   * 自訂 Menu.Item 元件
   * 參數為 Item 的 data object 以及 `key` 和 `onClick` callback
   */
  renderItem: elementType,
  /**
   * 自訂 Menu.ItemGroup 的 title 元件
   * 參數為 ItemGroup 的 data object
   */
  renderItemGroupTitle: elementType,
  /**
   * 自訂 Menu.SubMenu 的 title 元件
   * 參數為 SubMenu 的 data object，另外還會帶一個 `open` 表示目前 SubMenu 的開合狀態
   */
  renderSubMenuTitle: elementType,
  /** 自訂 Menu.SubMenu 的 style */
  subMenuStyle: stylePropType,
};

MenuList.defaultProps = {
  expandButtonText: undefined,
  itemGroupContainerStyle: {},
  itemGroupDividerStyle: {},
  itemGroupListStyle: {},
  menuStyle: {},
  numOfShowItems: 3,
  onItemClick: noop,
  onItemGroupTitleClick: noop,
  openAllSubMenu: true,
  renderEmpty: noop,
  renderExpandButton: ExpandButton,
  renderItem: MenuItem,
  renderItemGroupTitle: ItemGroupTitle,
  renderSubMenuTitle: SubMenuTitle,
  subMenuStyle: {},
};

export default memo(MenuList);

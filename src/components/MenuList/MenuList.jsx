import { Menu } from 'antd';
import drop from 'lodash/drop';
import includes from 'lodash/includes';
import take from 'lodash/take';
import uniqueId from 'lodash/uniqueId';
import {
  arrayOf, elementType, func, number, shape, string,
} from 'prop-types';
import React, {
  createElement, useEffect, useMemo, useState,
} from 'react';
import stylePropType from 'react-style-proptype';

import CollapseItemGroup from './components/CollapseItemGroup';
import ExpandButton from './components/ExpandButton';
import ItemGroupTitle from './components/ItemGroupTitle';
import MenuItem from './components/MenuItem';
import SubMenuTitle from './components/SubMenuTitle';
import getExpandButtonText from './utils/getExpandButtonText';
import truncate from './utils/truncate';
import {
  StyledEmptyContainer, StyledItemGroup, StyledMenu,
} from './MenuList.style';

const { SubMenu } = Menu;

/**
 * 封裝自 [Ant Design](https://ant.design/) 的 [Menu](https://ant.design/components/menu/) 元件。提供高自訂彈性的資料驅動選單元件。
 *
 * ### Usage
 *
 * 參考以下範例：
 *
 * ```js
 * import { MenuList } from '@hahow/hahow-design';
 *
 * const DATA = [
 *   {
 *     title: '章節 1',
 *     data: [
 *       {
 *         title: '單元 1',
 *         data: [
 *           { text: '選項 1' },
 *           { text: '選項 2' },
 *         ],
 *       },
 *     ],
 *   },
 * ];
 *
 * const App = () => (
 *   <MenuList data={DATA} />;
 * );
 * ```
 *
 * Render 結構如下：
 *
 * ```jsx
 * <Menu>
 *   <SubMenu title="章節 1">
 *     <Menu.ItemGroup title="單元 1">
 *       <Menu.Item>選項 1</Menu.Item>
 *       <Menu.Item>選項 2</Menu.Item>
 *     </Menu.ItemGroup>
 *   </SubMenu>
 * </Menu>
 * ```
 */
const MenuList = ({
  data, expandButtonText, itemGroupContainerStyle, itemGroupDividerStyle, itemGroupListStyle,
  menuStyle, numOfShowItems, onItemClick, onItemGroupTitleClick, renderEmpty,
  renderExpandButton, renderItem, renderItemGroupTitle, renderSubMenuTitle, subMenuStyle,
  truncateOptions,
}) => {
  // 有多少 SubMenu 就產生多少組 unique ID of array
  const keys = useMemo(() => data.map(() => uniqueId()), [data]);
  // 記下當前所有的 SubMenu keys，後面會用到
  const [allSubMenuKeys, setAllSubMenuKeys] = useState(keys);
  // 展開所有 SubMenu
  const [openKeys, setOpenKeys] = useState(keys);

  useEffect(() => {
    // props.data 如果有變動，更新 SubMenu keys 相關 state
    setAllSubMenuKeys(keys);
    setOpenKeys(keys);
  }, [data, keys]);

  if (data.length === 0) {
    return (
      <StyledEmptyContainer>
        {renderEmpty && createElement(renderEmpty)}
      </StyledEmptyContainer>
    );
  }

  return (
    <StyledMenu
      // Orginal props for Ant Design Menu
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
        data.map((subMenuItem, subMenuIndex) => {
          const subMenuKey = allSubMenuKeys[subMenuIndex];
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
                subMenuItem.data.map((groupItem) => {
                  const { data: itemData } = groupItem;

                  // 處理收合的 items
                  const collapseData = drop(itemData, numOfShowItems);
                  const collapseLength = collapseData.length;
                  // 預設收合數量超過 99 顯示 '99+'
                  const truncatedCollapseLength = truncate(collapseLength, truncateOptions);
                  const formatedExpandButtonText = expandButtonText(truncatedCollapseLength);

                  const showItemGroupTitleDivider = (itemData.length > 0);

                  const handleItemGroupTitleClick = (event) => onItemGroupTitleClick
                    && onItemGroupTitleClick(event, groupItem);

                  const groupKey = uniqueId();
                  const groupTitle = createElement(renderItemGroupTitle, {
                    ...groupItem,
                    onClick: handleItemGroupTitleClick,
                    showDivider: showItemGroupTitleDivider,
                  });

                  const buildRenderItem = (item) => {
                    const itemKey = uniqueId();
                    const handleItemClick = (event) => onItemClick
                      && onItemClick(event, item, groupItem);

                    return createElement(renderItem, {
                      key: itemKey,
                      onClick: handleItemClick,
                      ...item,
                    });
                  };

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
  /** Menu 列表的資料來源 */
  data: arrayOf(shape({
    /** Menu.SubMenu 的 title */
    title: string,
    /** Menu.ItemGroup 列表的資料來源 */
    data: arrayOf(shape({
      /** Menu.ItemGroup 的 title */
      title: string,
      /** Menu.Item 列表的資料來源 */
      data: arrayOf(shape).isRequired,
    })).isRequired,
  })).isRequired,
  /**
   * 展開按鈕的文字
   * 第一個參數為收合的數量
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
  /** 顯示多少數量的 items（其餘收合） */
  numOfShowItems: number,
  /**
   * Menu.Item onClick callback
   * 第一個參數為 Menu.Item 原本的 event object
   * 第二個參數為 Item 的 data object
   * 第三個參數為 ItemGroup 的 data object
   */
  onItemClick: func,
  /**
   * Menu.ItemGroup title onClick callback
   * 第一個參數為 onClick 原本的 event object
   * 第二個參數為 ItemGroup 的 data object
   */
  onItemGroupTitleClick: func,
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
  /** 超過指定數量顯示特定字串，例如：99+ */
  truncateOptions: shape({
    /** 超過的數量，例如：99 */
    lenght: number,
    /** 顯示的符號，例如：'+' */
    omission: string,
  }),
};

MenuList.defaultProps = {
  expandButtonText: getExpandButtonText,
  itemGroupContainerStyle: null,
  itemGroupDividerStyle: null,
  itemGroupListStyle: null,
  menuStyle: null,
  numOfShowItems: 3,
  onItemClick: null,
  onItemGroupTitleClick: null,
  renderEmpty: null,
  renderExpandButton: ExpandButton,
  renderItem: MenuItem,
  renderItemGroupTitle: ItemGroupTitle,
  renderSubMenuTitle: SubMenuTitle,
  subMenuStyle: null,
  truncateOptions: { length: 99, omission: '+' },
};

export default MenuList;

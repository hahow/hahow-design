import noop from 'lodash/noop';
import { elementType, node, string } from 'prop-types';
import React, { createElement, Fragment, memo } from 'react';
import useCollapse from 'react-collapsed';

import { StyledCollapseItemGroup } from './CollapseItemGroup.style';

const CollapseItemGroup = ({
  expandButtonText, renderExpandButton,
  children, ...props
}) => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  const ExpandButton = createElement(renderExpandButton, {
    toggleProps: getToggleProps(),
  }, expandButtonText);

  return (
    <Fragment key="collapse-item-group">
      <StyledCollapseItemGroup
        collapseProps={getCollapseProps()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </StyledCollapseItemGroup>
      {
        // 展開 items 的按鈕
        !isOpen && ExpandButton
      }
    </Fragment>
  );
};

CollapseItemGroup.propTypes = {
  children: node,
  expandButtonText: string,
  renderExpandButton: elementType,
};

CollapseItemGroup.defaultProps = {
  children: null,
  expandButtonText: '',
  renderExpandButton: noop,
};

export default memo(CollapseItemGroup);

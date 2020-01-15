import { Menu } from 'antd';
import noop from 'lodash/noop';
import { func, string } from 'prop-types';
import React from 'react';

const MenuItem = ({ onItemClick, text, ...rest }) => (
  <Menu.Item
    onClick={onItemClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {text}
  </Menu.Item>
);

MenuItem.propTypes = {
  onItemClick: func,
  text: string,
};

MenuItem.defaultProps = {
  onItemClick: noop,
  text: '',
};

export default MenuItem;

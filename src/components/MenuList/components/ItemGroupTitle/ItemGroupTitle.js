import { string } from 'prop-types';
import React from 'react';

const ItemGroupTitle = ({ title }) => <div>{title}</div>;

ItemGroupTitle.propTypes = {
  title: string,
};

ItemGroupTitle.defaultProps = {
  title: '',
};

export default ItemGroupTitle;

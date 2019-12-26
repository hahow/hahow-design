import { string } from 'prop-types';
import React from 'react';

const SubMenuTitle = ({ title }) => <div>{title}</div>;

SubMenuTitle.propTypes = {
  title: string,
};

SubMenuTitle.defaultProps = {
  title: '',
};

export default SubMenuTitle;

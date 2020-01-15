import { node, shape } from 'prop-types';
import React from 'react';

const ExpandButton = ({ children, toggleProps }) => (
  <button
    type="button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...toggleProps}
  >
    {children}
  </button>
);

ExpandButton.propTypes = {
  children: node,
  toggleProps: shape().isRequired,
};

ExpandButton.defaultProps = {
  children: null,
};

export default ExpandButton;

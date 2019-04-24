import PropTypes from 'prop-types';
import React from 'react';

export default function Checkbox({ name, value, checked }) {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={() => null}
    />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  name: 'vehicle1',
  value: 'Bike',
};

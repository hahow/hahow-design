import React from 'react';

export default function Checkbox({ name, value, checked }) {
  return (
    <input type="checkbox" name={name} value={value} checked={checked} />
  );
}

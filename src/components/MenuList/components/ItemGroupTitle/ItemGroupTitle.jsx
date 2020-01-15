import { func, string } from 'prop-types';
import React from 'react';

const ItemGroupTitle = ({ onClick, title }) => {
  const handleClick = (e) => onClick && onClick(e);
  return (
    <div
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex="0"
    >
      {title}
    </div>
  );
};

ItemGroupTitle.propTypes = {
  onClick: func,
  title: string,
};

ItemGroupTitle.defaultProps = {
  onClick: null,
  title: '',
};

export default ItemGroupTitle;

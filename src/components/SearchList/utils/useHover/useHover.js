import { useCallback, useState } from 'react';

const useHover = () => {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true));
  const handleMouseLeave = useCallback(() => setHover(false));

  return {
    getOnMouseHover: () => ({
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    isHover,
  };
};

export default useHover;

import { useEffect, useState } from 'react';

import buildSubMenuKey from '../buildSubMenuKey';

const useSubMenu = ({ data, openAllSubMenu }) => {
  // 預設展開所有 SubMenu
  const defaultOpenKeys = data.map((item, index) => buildSubMenuKey(index));
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  // 當 openAllSubMenu 變為 true，則打開所有 SubMenu
  // 當變為 false，則關閉所有 SubMenu
  useEffect(() => {
    if (openAllSubMenu === true) {
      setOpenKeys(defaultOpenKeys);
    } else if (openAllSubMenu === false) {
      setOpenKeys([]);
    }
  }, [openAllSubMenu]);

  return [openKeys, setOpenKeys];
};

export default useSubMenu;

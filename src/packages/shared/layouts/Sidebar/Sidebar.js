import './Sidebar.scss';

import { Menu } from 'adapters/ant-design';
import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Menu style={{ backgroundColor: '#fafafa' }}>
        <Menu.Item key='1'>
          <i class='fas fa-home'></i>
          Dashboard
        </Menu.Item>
        <Menu.Item key='2'>
          <i class='fas fa-cog'></i>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Sidebar;

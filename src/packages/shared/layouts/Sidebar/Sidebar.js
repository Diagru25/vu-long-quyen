import { Menu } from 'adapters/ant-design';
import React, { Fragment } from 'react';

const Sidebar = () => {
  return (
    <Fragment>
      <Menu theme='dark'>
        <Menu.Item key='1'>Dashboard</Menu.Item>
        <Menu.Item key='2'>Settings</Menu.Item>
        <Menu.Item key='3'>Logout</Menu.Item>
      </Menu>
    </Fragment>
  );
};
export default Sidebar;

import './Header.scss';

import { Avatar } from 'adapters/ant-design';
import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='logo'>for logo</div>
        <div className='avatar'>
          <Avatar size={40}>USER</Avatar>
          <span className='username'>Vu Long Quyen</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

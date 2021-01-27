import './Header.scss';

import { Avatar } from 'adapters/ant-design';
import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='left-actions'>
          <i class='fas fa-align-justify'></i>
          <i class='fas fa-home'></i>
        </div>

        <div className='right-actions'>
          <i class='fas fa-sign-out-alt'></i>
        </div>

        <div className='avatar'>
          <Avatar>USER</Avatar>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

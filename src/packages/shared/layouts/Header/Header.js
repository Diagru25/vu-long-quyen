import './Header.scss';

import { Avatar } from 'adapters/ant-design';
import React, { Fragment } from 'react';
import { toggleSideBar } from 'src/Redux/Menu';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className='container'>
        <div className='left-actions'>
          <i
            className='fas fa-align-justify'
            onClick={() => dispatch(toggleSideBar())}
          ></i>
          <i className='fas fa-home'></i>
        </div>

        <div className=''></div>
        <div className='right-actions'>
          <span>
            <i className='fas fa-sign-out-alt'></i>
          </span>
        </div>

        <div className='avatar'>
          <Avatar>USER</Avatar>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

import './Header.scss';

import { Avatar } from 'adapters/ant-design';
import React, { Fragment } from 'react';
import { toggleSideBar } from 'src/Redux/Menu';
import { useDispatch } from 'react-redux';
import firebase from 'helper/firebaseConfig';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        firebase.auth.signOut()
            .then(() => {
                console.log('logout success');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='left-actions'>
                    <i
                        className='fas fa-align-justify'
                        onClick={() => dispatch(toggleSideBar())}
                    ></i>
                    <Link to='/dashboard'>
                        <i className='fas fa-home'></i>
                    </Link>
                    <Link to='/list' className='left-actions-item'>
                        <i className='fas fa-list-ol'></i>
                    </Link>
                    <Link to='/setting' className='left-actions-item'>
                        <i className='fas fa-cog'></i>
                    </Link>
                </div>

                <div className=''></div>
                <div className='right-actions'>
                    <span onClick={onLogout}>
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

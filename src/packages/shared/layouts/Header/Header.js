import './Header.scss';

import { Avatar, Tooltip } from 'adapters/ant-design';
import React, { Fragment } from 'react';
import { toggleSideBar } from 'src/Redux/Menu';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'helper/firebaseConfig';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user } = useSelector(state => state.authReducer);
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

    const userDisplay =
        user != null
            ?
            user.displayName
                ?
                <span style={{ color: 'white' }}>{user.displayName}</span>
                :
                <div className='avatar'>
                    <Avatar>User</Avatar>
                </div>
            :
            <div className='avatar'>
                <Avatar>User</Avatar>
            </div>

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

                <Link to='/account'>
                    <Tooltip title={user !== null ? user.displayName : 'User'}>

                        {userDisplay}

                    </Tooltip>

                </Link>

            </div>
        </Fragment>
    );
};

export default Header;

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
                <div className="avatar">
                    <span>{user.displayName}</span>
                </div>

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
                    <Tooltip title='Menu'>
                        <i
                            className='fas fa-align-justify'
                            onClick={() => dispatch(toggleSideBar())}
                        ></i>
                    </Tooltip>

                    <Link to='/dashboard'>
                        <Tooltip title='Trang chủ / Thống kê'>
                            <i className='fas fa-home'></i>
                        </Tooltip>

                    </Link>
                    <Link to='/list' className='left-actions-item'>
                        <Tooltip title='Danh sách'>
                            <i className='fas fa-list-ol'></i>
                        </Tooltip>

                    </Link>
                    <Link to='/setting' className='left-actions-item'>
                        <i className='fas fa-cog'></i>
                    </Link>
                </div>

                <div className=''></div>
                <div className='right-actions'>
                    <Tooltip title='Đăng xuất'>
                        <span onClick={onLogout}>
                            <i className='fas fa-sign-out-alt'></i>
                        </span>
                    </Tooltip>
                </div>

                <Link to='/account' style={{ paddingTop: '0px' }}>
                    <Tooltip title='Tài khoản'>
                        {userDisplay}
                    </Tooltip>

                </Link>

            </div>
        </Fragment>
    );
};

export default Header;

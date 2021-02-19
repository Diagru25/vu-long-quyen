import './Sidebar.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { isShowSideBar } = useSelector((state) => state.menuReducer);

    return (
        <div className={isShowSideBar ? 'sidebar' : 'sidebar-hidden'}>
            <ul className='left-menu'>
                <li>
                    <NavLink to='/dashboard' activeClassName='activated'>
                        <div className='items'>
                            <i className='fas fa-chart-pie'></i>
                            <span>Thống kê</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/list' activeClassName='activated'>
                        <div className='items'>
                            <i className='fas fa-list-ol'></i>
                            <span>Danh sách học viên</span>
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/setting' activeClassName='activated'>
                        <div className='items'>
                            <i className='fas fa-cog'></i>
                            <span>Cài đặt</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;

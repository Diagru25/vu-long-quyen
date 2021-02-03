import './Sidebar.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { isShowSideBar } = useSelector((state) => state.menuReducer);

    return (
        <div className={isShowSideBar ? 'sidebar' : 'sidebar-hidden'}>
            <ul className='left-menu'>
                <li>
                    <Link to='/list'>
                        <div className='items'>
                            <i className="fas fa-list-ol"></i>
                            <span>Danh sách học viên</span>
                        </div>
                    </Link>

                </li>
                <li>
                    <Link to='dashboard'>
                        <div className='items'>
                            <i className="fas fa-chart-pie"></i>
                            <span>Thống kê</span>
                        </div>
                    </Link>

                </li>
            </ul>
        </div>
    );
};
export default Sidebar;

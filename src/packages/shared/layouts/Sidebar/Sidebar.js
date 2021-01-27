import './Sidebar.scss';

import { Menu } from 'adapters/ant-design';
import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const { isShowSideBar } = useSelector(state => state.menuReducer);

    return (
        <div className={isShowSideBar ? 'sidebar' : 'sidebar-hidden'}>
            <ul className="left-menu">
                <li>
                    <div className="items">
                        <i class='fas fa-home'></i>
                        <span>Inbox</span>
                    </div>
                </li>
                <li>
                    <div className="items">
                        <i class='fas fa-cog'></i>
                        <span>Inbox</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;

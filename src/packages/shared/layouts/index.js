import './index.scss';
import { Breadcrumb } from 'adapters/ant-design';

import React from 'react';

import Header from 'shared/layouts/Header/Header';
import Sidebar from 'shared/layouts/Sidebar/Sidebar';

const Layouts = ({ children }) => {
  return (
    <>
      <div className='layout'>
        <Header />
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>S&T</Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layouts;

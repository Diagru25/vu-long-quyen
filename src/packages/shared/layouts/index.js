import './index.scss';
import { Breadcrumb } from 'adapters/ant-design';

import React from 'react';

import Header from 'shared/layouts/Header/Header';
import Sidebar from 'shared/layouts/Sidebar/Sidebar';

const Layouts = ({ children, text }) => {
    return (
        <>
            <div className='layout'>
                <Header />
                <div className='main'>
                    <Sidebar />
                    <div className='content'>
                        <Breadcrumb
                            style={{
                                margin: '5px 0px',
                                padding: '5px',
                                backgroundColor: '#f3f3f3',
                                borderRadius: ' 5px',
                            }}
                        >
                            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item>{text}</Breadcrumb.Item>
                        </Breadcrumb>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layouts;

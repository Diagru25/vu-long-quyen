import './DashboardCard.scss';
import React from 'react';

import { Card } from 'adapters/ant-design';

export default function DashboardCard() {
    return (
        <div className='card-content'>
            <Card title='Card title' bordered={true} className='card-item'>
                <p>Card content</p>
                <p>Ngày tháng năm</p>
            </Card>
            <Card title='Card title' bordered={false} className='card-item'>
                <p>Card content</p>
                <p>Ngày tháng năm</p>
            </Card>
            <Card title='Card title' bordered={false} className='card-item'>
                <p>Card content</p>
                <p>Ngày tháng năm</p>
            </Card>
        </div>
    )
}

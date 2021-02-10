import './Dashboard.scss';
import React, { Fragment } from 'react';
import Layouts from 'shared/layouts/index';

import DashboardCard from 'src/Dashboard/components/DashboardCard';
import DashboardStatistics from 'src/Dashboard/components/DashboardStatistics';

const Dashboard = () => {
    return (
        <Fragment>
            <Layouts text='Thống kê'>
                <DashboardCard />
                <DashboardStatistics />
            </Layouts>
        </Fragment>
    )
}

export default Dashboard;
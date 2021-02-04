import './Dashboard.scss';
import React, { Fragment } from 'react';
import Layouts from 'shared/layouts/index';

import DashboardCard from 'src/Dashboard/components/DashboardCard';

const Dashboard = () => {
    return (
        <Fragment>
            <Layouts>
                <DashboardCard />
            </Layouts>
        </Fragment>
    )
}

export default Dashboard;
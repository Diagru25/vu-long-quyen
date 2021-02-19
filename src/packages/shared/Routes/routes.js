import React from 'react';

const routes = [
    {
        path: '/list',
        component: React.lazy(() =>
            import('src/StudentsManagement/StudentsManagement')
        ),
        exact: true,
    },
    {
        path: '/dashboard',
        component: React.lazy(() => import('src/Dashboard/Dashboard')),
        exact: true,
    },
    {
        path: '/setting',
        component: (<div>setting</div>),
        exact: true
    }
];

export default routes;

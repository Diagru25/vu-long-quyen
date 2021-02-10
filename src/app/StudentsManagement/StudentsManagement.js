import './StudentsManagement.scss';

import React, { Fragment } from 'react';

import Layouts from 'shared/layouts';
import ListStudents from './components/ListStudents';
import StudentActions from './components/StudentActions';


const StudentsManagement = () => {
    return (
        <Fragment>
            <Layouts text='Danh sách võ sinh'>
                <StudentActions />
                <ListStudents />
            </Layouts>
        </Fragment>
    );
};

export default StudentsManagement;

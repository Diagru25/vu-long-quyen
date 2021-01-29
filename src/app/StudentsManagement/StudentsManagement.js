import './StudentsManagement.scss';

import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStudents } from 'src/Redux/Student';

import Layouts from 'shared/layouts';
import ListStudents from './components/ListStudents';
import StudentActions from './components/StudentActions';


const StudentsManagement = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllStudents());
    }, [dispatch])
    return (
        <Fragment>
            <Layouts>
                <StudentActions />
                <ListStudents />
            </Layouts>
        </Fragment>
    );
};

export default StudentsManagement;

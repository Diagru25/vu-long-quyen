import './StudentActions.scss';

import { Input, Button } from 'adapters/ant-design';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addStudent, updateStudent, getStudentForPage } from 'src/Redux/Student';

const StudentActions = () => {

    const dispatch = useDispatch();
    const { total, currentList } = useSelector(state => state.studentReducer);

    return (
        <div className='actions'>
            <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
            <Button type='primary' onClick={() => { dispatch(addStudent()); dispatch(getStudentForPage()) }}>Create</Button>
            <p>{total}</p>
            <p>{currentList.length}</p>
        </div>
    );
};
export default StudentActions;

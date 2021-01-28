import './StudentActions.scss';

import { Input, Button } from 'adapters/ant-design';
import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchStudents, saveCurrentStudent } from 'src/Redux/Student';

const StudentActions = () => {

    const dispatch = useDispatch();

    return (
        <div className='actions'>
            <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
            <Button type='primary' onClick={() => dispatch(saveCurrentStudent())}>Create</Button>
        </div>
    );
};
export default StudentActions;

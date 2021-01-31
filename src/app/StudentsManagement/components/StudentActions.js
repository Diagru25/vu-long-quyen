import './StudentActions.scss';

import { Input, Button, Select } from 'adapters/ant-design';

import React, { useState } from 'react';
import { moment } from 'adapters/moment';

import { useDispatch } from 'react-redux';
import {
    addStudent,
    updateCurrentStudent,
    setDefaultStudent,
} from 'src/Redux/Student';

import StudentModal from 'shared/modals/StudentModal';
import { SORT } from 'helper/models';

const StudentActions = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const showStudentModal = () => {
        setTitle(`Tạo mớI học viên`);
        setIsVisible(true);
    };

    const handleCancel = () => {
        dispatch(setDefaultStudent());
        setIsVisible(false);
    };

    const handleOK = () => {
        let today = moment().format('DD-MM-YYYY');
        dispatch(updateCurrentStudent({ createDate: today, startDate: today }));
        dispatch(addStudent());
        setIsVisible(false);
    };
    return (
        <div className='actions'>
            <Button type='primary' onClick={showStudentModal}>
                Thêm mới
                </Button>
            <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
            <StudentModal
                isVisible={isVisible}
                title={title}
                handleCancel={handleCancel}
                footer={[
                    <Button key='btn1' type='default' onClick={handleCancel}>Hủy</Button>,
                    <Button key='btn2' type='primary' onClick={handleOK}>Thêm mới</Button>
                ]}
            />
        </div>
    );
};
export default StudentActions;

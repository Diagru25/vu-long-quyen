import './StudentActions.scss';

import { Input, Button } from 'adapters/ant-design';

import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addStudent, updateCurrentStudent, setDefaultStudent } from 'src/Redux/Student';

import StudentModal from 'shared/modals/StudentModal';


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
        //dispatch(setDefaultStudent());
        setIsVisible(false);
    };

    return (
        <div className='actions'>
            <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
            <Button type='primary' onClick={showStudentModal}>
                Thêm mới
                </Button>
            <StudentModal
                isVisible={isVisible}
                title={title}
                handleCancel={handleCancel}
                footer={[
                    <Button key='btn1' type='default' onClick={handleCancel}>Hủy</Button>,
                    <Button key='btn2' type='primary' onClick={handleOK}>Lưu</Button>
                ]}
            />
        </div>
    );
};
export default StudentActions;

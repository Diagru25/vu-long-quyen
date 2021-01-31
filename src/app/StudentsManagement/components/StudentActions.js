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

const { Option } = Select;

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

    const handleFilter = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='actions'>
            <Select placeholder='Sắp xếp' onChange={value => handleFilter(value)}>
                <Option value='1'>Tên</Option>
                <Option value='2'>Tuổi</Option>
            </Select>
            <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
            <Button type='primary' onClick={showStudentModal}>
                Thêm mới
            </Button>
            <StudentModal
                isVisible={isVisible}
                title={title}
                handleCancel={handleCancel}
                footer={[
                    <Button key='btn1' type='default' onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key='btn2' type='primary' onClick={handleOK}>
                        Lưu
                    </Button>,
                ]}
            />
        </div>
    );
>>>>>>> 407c1c14e0deaba814d5b2bdc46a2d5d05bfa5fd
};
export default StudentActions;

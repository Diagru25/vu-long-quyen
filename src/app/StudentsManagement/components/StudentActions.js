import './StudentActions.scss';

import { Input, Button, Select } from 'adapters/ant-design';

import React, { useState, useEffect } from 'react';
import { moment } from 'adapters/moment';

import { useDispatch } from 'react-redux';
import {
    addStudent,
    updateCurrentStudent,
    setDefaultStudent,
    sortList
} from 'src/Redux/Student';

import StudentModal from 'shared/modals/StudentModal';

import { SORT } from 'helper/models';
import { fetchAllStudents } from 'app/Redux/Student';

const { Option } = Select;

const StudentActions = () => {
    const dispatch = useDispatch();

    const [txtSearch, setTxtSearch] = useState('');
    const [title, setTitle] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeout = setTimeout(() => {
            dispatch(fetchAllStudents(txtSearch));
        }, 300);
        return () => clearTimeout(timeout)
    }, [txtSearch])

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
        dispatch(sortList(value));
    };

    return (
        <div className='actions'>
            <Select placeholder='Sắp xếp' defaultValue='nameDes' onChange={value => handleFilter(value)}>
                {SORT.map(element =>
                    <Option key={element.value} value={element.value}>
                        {element.title}
                    </Option>
                )}
            </Select>
            <Input
                placeholder='Tìm kiếm theo tên...'
                style={{ margin: '0  15px' }}
                value={txtSearch.text}
                onChange={e => setTxtSearch(e.target.value)}
            />
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
};
export default StudentActions;

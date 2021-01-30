import { Table, Button } from 'adapters/ant-design';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudents, getStudentForPage, updateState } from 'src/Redux/Student';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        width: '5%',
        align: 'center'
    },
    {
        title: 'Họ Tên',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'dayOfBirth',
        key: 'dayOfBirth',
        align: 'center'
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: 'Thao tác',
        dataIndex: '',
        key: 'x',
        align: 'center',
        render: () => (
            <div>
                <Button type='text'>Chi tiết</Button>
                <Button danger type='default'>
                    Xóa
                </Button>
            </div>
        ),
    },
];



const ListStudents = () => {

    const { currentList, loading, total, pageIndex, pageSize } = useSelector(state => state.studentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllStudents());
    }, [dispatch])

    const handleOnChange = (page) => {
        dispatch(updateState({ pageIndex: page }));
        getStudentForPage();
    }
    const handleSizeChange = (current, pageSize) => {
        dispatch(updateState({ pageSize: pageSize }));
        getStudentForPage();
    }

    return (
        <Table
            columns={columns}
            bordered={true}
            loading={loading}
            pagination={{
                total: total,
                pageSize: pageSize,
                current: pageIndex,
                showSizeChanger: true,
                locale: { items_per_page: "/ Trang" },

                onChange: handleOnChange,
                onShowSizeChange: handleSizeChange,
            }}
            expandable={{
                expandedRowRender: (record) => (
                    <p style={{ margin: 0 }}>{record.description}</p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={currentList.map((student, index) => { return { ...student, stt: index + 1 } })}
        ></Table>
    );
};

export default ListStudents;

import { Table, Button } from 'adapters/ant-design';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAllStudents,
    getStudentForPage,
    updateState,
    deleteStudent,
    updateStudent,
    setCurrentStudent,
    setDefaultStudent
}
    from 'src/Redux/Student';

import StudentModal from 'shared/modals/StudentModal';

const ListStudents = () => {

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
            key: 'action',
            align: 'center',
            render: (record) => (
                <div>
                    <Button type='default'
                        onClick={() => {
                            dispatch(setCurrentStudent(record));
                            showStudentModal();
                        }}
                    >
                        Chi tiết
                    </Button>
                    <Button
                        type='default'
                        style={{ color: 'red', marginLeft: '10px' }}
                        onClick={() => dispatch(deleteStudent(record.key))}
                    >
                        Xóa
                </Button>
                </div>
            ),
        },
    ];

    const { currentList, loading, total, pageIndex, pageSize } = useSelector(state => state.studentReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchAllStudents());
    }, [dispatch])

    const showStudentModal = () => {
        setTitle(`Chi tiết học viên`);
        setIsVisible(true);
    };

    const handleCancel = () => {
        dispatch(setDefaultStudent());
        setIsVisible(false);
    };

    const handleOK = () => {
        dispatch(updateStudent());
        setIsVisible(false);
    };

    const handleOnChange = (pageIndex, pageSize) => {
        dispatch(getStudentForPage({ pageIndex, pageSize }));
    }

    return (
        <>
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
                }}
                expandable={{
                    expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.description}</p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={currentList.map((student, index) => { return { ...student, stt: index + 1 } })}
            >
            </Table>
            <StudentModal
                isVisible={isVisible}
                title={title}
                handleCancel={handleCancel}
                footer={[
                    <Button key='btn1' type='default' onClick={handleCancel}>Hủy</Button>,
                    <Button key='btn2' type='primary' onClick={handleOK}>Lưu thay đổi</Button>
                ]}
            />
        </>
    );
};

export default ListStudents;

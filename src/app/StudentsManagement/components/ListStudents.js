import './ListStudent.scss';
import { Table, Button } from 'adapters/ant-design';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getStudentForPage,
    deleteStudent,
    updateStudent,
    setCurrentStudent,
    setDefaultStudent
}
    from 'src/Redux/Student';

import { BELTS } from 'helper/models';

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
            align: 'center',
            responsive: ['md']
        },
        {
            title: 'Thao tác',
            key: 'action',
            align: 'center',
            render: (record) => (
                <div>
                    <Button type='default'
                        onClick={() => {
                            let { stt, ...cloneRecord } = record;
                            dispatch(setCurrentStudent(cloneRecord));
                            showStudentModal();
                        }}
                    >
                        Chi tiết
                    </Button>
                    <Button
                        type='default'
                        style={{ color: 'red', margin: '5px' }}
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

    // useEffect(() => {
    //     dispatch(fetchAllStudents());
    // }, [dispatch])

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
                        <div className="expand-content">
                            <div className="expand-item">
                                <span>Địa chỉ : </span>
                                <span>{record.address}</span>
                            </div>
                            <div className="expand-item">
                                <span>Cấp bậc : </span>
                                <span>{BELTS.find(element => element.beltID === record.beltID).title}</span>
                            </div>
                            <div className="expand-item">
                                <span>Phụ huynh : </span>
                                <span>
                                    {
                                        typeof (record.contactNote) !== 'undefined'
                                            ?
                                            record.contactNote.map(element => `${element.parentName} - ${element.parentPhone} |`)
                                            :
                                            ''
                                    }
                                </span>
                            </div>
                            <div className="expand-item">
                                <span>Các tháng đóng học : </span>
                                <span>
                                    {
                                        typeof (record.months) !== 'undefined'
                                            ?
                                            record.months.map(element => `${element} `)
                                            :
                                            ''
                                    }
                                </span>
                            </div>
                            <div className="expand-item">
                                <span>Ngày thăng đai : </span>
                                <span>
                                    {
                                        typeof (record.promotionDate) !== 'undefined'
                                            ?
                                            record.promotionDate.map(element => `${element.onDate} ➟ ${BELTS.find(belt => belt.beltID === element.type).title} | `)
                                            :
                                            ''
                                    }
                                </span>
                            </div>
                        </div>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={currentList.map((student, index) => { return { ...student, stt: index + pageSize * (pageIndex - 1) + 1 } })}
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

import './StudentActions.scss';

import { Input, Button } from 'adapters/ant-design';
import React, { useState } from 'react';

import StudentModal from 'shared/modals/StudentModal';

const StudentActions = () => {
  const [title, setTitle] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const showStudentModal = () => {
    setTitle(`Tạo mớI học viên`);
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOk = (values) => {
    console.log(values);
    setIsVisible(false);
  };

  return (
    <>
      <div className='actions'>
        <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
        <Button type='primary' onClick={showStudentModal}>
          Create
        </Button>
        <StudentModal
          isVisible={isVisible}
          title={title}
          okText='Submit'
          cancelText='Cancel'
          handleCancel={handleCancel}
          handleOk={handleOk}
        />
      </div>
    </>
  );
};
export default StudentActions;

import { Modal, Form } from 'adapters/ant-design';

import React from 'react';

import { FormStudent } from 'shared/Forms/FormStudent';

const StudentModal = ({
  title,
  isVisible,
  handleCancel,
  handleOk,
  okText,
  cancelText,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title={title}
      visible={isVisible}
      onCancel={handleCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            handleOk(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      okText={okText}
      cancelText={cancelText}
    >
      <FormStudent form={form} />
    </Modal>
  );
};

export default StudentModal;

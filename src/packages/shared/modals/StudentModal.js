import { Modal } from 'adapters/ant-design';

import React from 'react';

import { FormStudent } from 'shared/Forms/FormStudent';

const StudentModal = ({
    title,
    isVisible,
    handleCancel,
    footer,
}) => {

    return (
        <Modal
            style={{ top: 20 }}
            title={title}
            visible={isVisible}
            onCancel={handleCancel}
            footer={footer}
        >
            <FormStudent />
        </Modal>
    );
};

export default StudentModal;

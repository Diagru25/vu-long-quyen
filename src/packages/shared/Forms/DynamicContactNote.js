import React from 'react';
import { Collapse, Form, Input, Button, Space } from 'adapters/ant-design';
import { MinusCircleOutlined } from 'adapters/ant-design';

const DynamicContactNote = () => {
  const { Panel } = Collapse;
  return (
    <Collapse style={{ margin: '8px 0' }}>
      <Panel header='Thông tin liên hệ'>
        <Form.List name='contactNote'>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex' }}
                    align='baseline'
                  >
                    <Form.Item
                      label='Tên người thân'
                      name={[field.name, 'parentName']}
                      noStyle
                    >
                      <Input placeholder='Tên người thân' />
                    </Form.Item>
                    <Form.Item name={[field.name, 'parentPhone']}>
                      <Input placeholder='Số điện thoại' />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                ))}
                <Button
                  type='dashed'
                  onClick={() => {
                    add();
                  }}
                  style={{ width: '100%' }}
                >
                  Thêm liên hệ
                </Button>
              </>
            );
          }}
        </Form.List>
      </Panel>
    </Collapse>
  );
};
export default DynamicContactNote;

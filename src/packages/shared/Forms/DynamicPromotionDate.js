import React from 'react';
import {
  Collapse,
  Form,
  Select,
  Button,
  DatePicker,
  Space,
} from 'adapters/ant-design';
import { MinusCircleOutlined } from 'adapters/ant-design';

import { BELTS } from 'helper/models';

export const DynamicPromotionDate = () => {
  const { Panel } = Collapse;
  const { Option } = Select;

  return (
    <Collapse>
      <Panel header='Thông tin thăng đai'>
        <Form.List name='promotionDate'>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex' }}
                    align='baseline'
                  >
                    <Form.Item name={[field.name, 'type']}>
                      <Select placeholder='Chọn đai' allowClear>
                        {BELTS.map((belt) => (
                          <Option key={belt.beltID} value={belt.beltID}>
                            {belt.title}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item name={[field.name, 'onDate']}>
                      <DatePicker />
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
                  Thêm thông tin
                </Button>
              </>
            );
          }}
        </Form.List>
      </Panel>
    </Collapse>
  );
};

export default DynamicPromotionDate;

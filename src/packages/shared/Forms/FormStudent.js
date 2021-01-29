import { Form, Input, DatePicker, Checkbox, Select } from 'adapters/ant-design';

import React from 'react';

import { MONTHSOFYEAR, MOCK_USER, BELTS } from 'helper/models';

import DynamicContactNote from 'shared/Forms/DynamicContactNote';
import DynamicPromotionDate from 'shared/Forms/DynamicPromotionDate';

export const FormStudent = ({ form }) => {
  const { Option } = Select;

  return (
    <Form
      form={form}
      layout='vertical'
      name='form_in_modal'
      initialValues={MOCK_USER}
    >
      <Form.Item
        name='name'
        label='Tên'
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='address' label='Địa chỉ'>
        <Input />
      </Form.Item>

      <Form.Item name='dayOfBirth' label='Ngày sinh'>
        <DatePicker showTime format='DD-MM-YYYY' />
      </Form.Item>

      <Form.Item name='phoneNumber' label='Số điện thoại'>
        <Input addonBefore='+84' />
      </Form.Item>

      <Form.Item name='beltID' label='Đai'>
        <Select placeholder='Chọn đai' allowClear>
          {BELTS.map((belt) => (
            <Option key={belt.beltID} value={belt.beltID}>
              {belt.title}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name='isMember' valuePropName='checked'>
        <Checkbox>Học viên</Checkbox>
      </Form.Item>

      <Form.Item name='months' label='Tháng đóng học'>
        <Select placeholder='Chọn tháng kích hoạt' allowClear mode='multiple'>
          {MONTHSOFYEAR.map((month) => (
            <Option key={month.value} value={month.value}>
              {month.title}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <DynamicContactNote />

      <DynamicPromotionDate />
    </Form>
  );
};

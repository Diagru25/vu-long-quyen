import { Form, Input, DatePicker, Checkbox, Select } from 'adapters/ant-design';

import React from 'react';

import { MONTHSOFYEAR, BELTS } from 'helper/models';
import { useSelector, useDispatch } from 'react-redux';
import { moment } from 'adapters/moment';

import DynamicContactNote from 'shared/Forms/DynamicContactNote';
import DynamicPromotionDate from 'shared/Forms/DynamicPromotionDate';

import { updateCurrentStudent } from 'src/Redux/Student';

export const FormStudent = () => {
    const { Option } = Select;

    const dispatch = useDispatch();

    const { currentStudent } = useSelector((state) => state.studentReducer);

    return (
        <Form layout='vertical' name='form_in_modal'>
            <Form.Item label='Tên'>
                <Input
                    value={currentStudent.name}
                    onChange={(e) =>
                        dispatch(updateCurrentStudent({ name: e.target.value }))
                    }
                />
            </Form.Item>
            <Form.Item label='Địa chỉ'>
                <Input
                    value={currentStudent.address}
                    onChange={(e) =>
                        dispatch(updateCurrentStudent({ address: e.target.value }))
                    }
                />
            </Form.Item>

            <Form.Item label='Ngày sinh'>
                <DatePicker
                    format='DD-MM-YYYY'
                    value={moment(currentStudent.dayOfBirth, 'DD-MM-YYYY').isValid() ? moment(currentStudent.dayOfBirth, 'DD-MM-YYYY') : null}
                    onChange={(date, dateString) =>
                        dispatch(updateCurrentStudent({ dayOfBirth: dateString }))
                    }
                />
            </Form.Item>

            <Form.Item label='Số điện thoại'>
                <Input
                    addonBefore='+84'
                    value={currentStudent.phoneNumber}
                    onChange={(e) =>
                        dispatch(updateCurrentStudent({ phoneNumber: e.target.value }))
                    }
                />
            </Form.Item>

            <Form.Item label='Đai'>
                <Select
                    placeholder='Chọn đai'
                    allowClear
                    value={currentStudent.beltID}
                    onChange={(value) =>
                        dispatch(updateCurrentStudent({ beltID: value }))
                    }
                >
                    {BELTS.map((belt) => (
                        <Option key={belt.beltID} value={belt.beltID}>
                            {belt.title}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item valuePropName='checked'>
                <Checkbox
                    checked={currentStudent.isMember}
                    onChange={(e) =>
                        dispatch(updateCurrentStudent({ isMember: e.target.checked }))
                    }
                >
                    Học viên
        </Checkbox>
            </Form.Item>

            <Form.Item label='Tháng đóng học'>
                <Select
                    placeholder='Chọn tháng kích hoạt'
                    allowClear
                    mode='multiple'
                    value={currentStudent.months}
                    onChange={(value) =>
                        dispatch(updateCurrentStudent({ months: value }))
                    }
                >
                    {MONTHSOFYEAR.map((month) => (
                        <Option key={month.value} value={month.value}>
                            {month.title}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <DynamicContactNote data={currentStudent.contactNote} />

            <DynamicPromotionDate data={currentStudent.promotionDate} />
        </Form>
    );
};

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

import { moment } from 'adapters/moment';
import { useDispatch } from 'react-redux';
import { updateCurrentStudent } from 'src//Redux/Student';

import { BELTS } from 'helper/models';

export const DynamicPromotionDate = ({ data, curBeltID }) => {
    const { Panel } = Collapse;
    const { Option } = Select;

    const dispatch = useDispatch();

    const handleOnChangeSelect = (value, index) => {
        let promotionDate = [...data];
        let prvElement = promotionDate[index];

        promotionDate[index] = { ...prvElement, type: value };

        promotionDate.sort((a, b) => a.type - b.type);

        value > curBeltID
            ?
            dispatch(updateCurrentStudent({ promotionDate, beltID: value }))
            :
            dispatch(updateCurrentStudent({ promotionDate }));
    };

    const handleOnChangeDate = (date, dateString, index) => {
        let promotionDate = [...data];
        let prvElement = promotionDate[index];

        promotionDate[index] = { ...prvElement, onDate: dateString };

        dispatch(updateCurrentStudent({ promotionDate }));
    };

    return (
        <Collapse>
            <Panel header='Thông tin thăng đai'>
                <Form.List name='promotionDate' initialValue={data}>
                    {(fields, { add, remove }) => {
                        return (
                            <>
                                {fields.map((field, index) => (
                                    <Space
                                        key={field.key}
                                        style={{ display: 'flex' }}
                                        align='baseline'
                                    >
                                        <Form.Item >
                                            <Select
                                                style={{ width: '174px' }}
                                                allowClear
                                                placeholder='Chọn bậc đai đã lên'
                                                value={typeof (data[index]) !== 'undefined' ? data[index].type : ''}
                                                onChange={(value) => handleOnChangeSelect(value, index)}
                                            >
                                                {BELTS.map((belt) => (
                                                    <Option key={belt.beltID} value={belt.beltID}>
                                                        {belt.title}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>

                                        <Form.Item >
                                            <DatePicker
                                                placeholder='Ngày lên đai'
                                                format='DD-MM-YYYY'
                                                value={
                                                    typeof (data[index]) !== 'undefined'
                                                        ?
                                                        moment(data[index].onDate, 'DD-MM-YYYY').isValid() ? moment(data[index].onDate, 'DD-MM-YYYY') : null
                                                        : null
                                                }
                                                onChange={(date, dateString) =>
                                                    handleOnChangeDate(date, dateString, index)
                                                }
                                            />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                let promotionDate = [...data];
                                                promotionDate.splice(index, 1);
                                                dispatch(updateCurrentStudent({ promotionDate }));
                                                remove(field.name);
                                            }}
                                        />
                                    </Space>
                                ))}

                                <Button
                                    type='dashed'
                                    onClick={() => {
                                        let promotionDate = typeof (data) !== 'undefined' ? [...data] : [];

                                        promotionDate.push({ type: '', onDate: '' });
                                        dispatch(updateCurrentStudent({ promotionDate: promotionDate }));
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

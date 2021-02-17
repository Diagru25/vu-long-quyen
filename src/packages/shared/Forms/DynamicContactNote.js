import React from 'react';
import { Collapse, Form, Input, Button, Space } from 'adapters/ant-design';
import { MinusCircleOutlined } from 'adapters/ant-design';
import { useDispatch } from 'react-redux';
import { updateCurrentStudent } from 'src/Redux/Student';

const DynamicContactNote = ({ data }) => {
    const { Panel } = Collapse;
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        let name = e.target.name;
        let value = e.target.value;
        let contactNote = [...data];
        let prvElement = contactNote[index];

        if (name === 'parentName')
            prvElement = { ...prvElement, parentName: value };
        else
            prvElement = { ...prvElement, parentPhone: value }

        contactNote[index] = { ...prvElement };

        dispatch(updateCurrentStudent({ contactNote }));
    }

    return (
        <Collapse style={{ margin: '8px 0' }}>
            <Panel header='Thông tin liên hệ'>
                <Form.List name='contactNote' initialValue={data}>
                    {(fields, { add, remove }) => {
                        return (
                            <>
                                {fields.map((field, index) => (
                                    <Space
                                        key={field.key}
                                        style={{ display: 'flex' }}
                                        align='baseline'
                                    >
                                        <Form.Item
                                        //label='Tên người thân'
                                        //noStyle
                                        >
                                            <Input
                                                name='parentName'
                                                value={typeof (data[index]) !== 'undefined' ? data[index].parentName : ''}
                                                placeholder='Tên người thân'
                                                onChange={(e) => handleOnChange(e, index)}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input
                                                name='parentPhone'
                                                value={typeof (data[index]) !== 'undefined' ? data[index].parentPhone : ''}
                                                placeholder='Số điện thoại'
                                                onChange={(e) => handleOnChange(e, index)}
                                            />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                let contactNote = [...data];
                                                contactNote.splice(index, 1);
                                                dispatch(updateCurrentStudent({ contactNote }));
                                                remove(field.name);
                                            }}
                                        />
                                    </Space>
                                ))}
                                <Button
                                    type='dashed'
                                    onClick={() => {
                                        let contactNote = [...data];
                                        contactNote.push({ parentName: '', parentPhone: '' });
                                        dispatch(updateCurrentStudent({ contactNote }));
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

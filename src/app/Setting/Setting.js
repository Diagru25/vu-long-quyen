import './Setting.scss';
import { Form, Input, Button, message } from 'adapters/ant-design';

import { numberWithCommas } from 'helper/functions';
import React, { Fragment, useState, useEffect } from 'react';
import { settingServices } from 'helper/services/services';
import Layouts from 'shared/layouts/index';

const Setting = () => {

    const [money, setMoney] = useState(0);

    useEffect(() => {
        async function fetchData() {
            let snapShot = await settingServices.getFee();
            setMoney(Number(snapShot.val()));
        }

        fetchData();

    }, [])

    const handleOnChange = (e) => {
        let num = Number(e.target.value.replace(/,/g, ''));

        if (typeof (num) === 'number')
            setMoney(num);
        else
            message.error('Giá trị không hợp lệ, hãy nhập lại');
    }



    const handleOnClick = async () => {
        if (typeof (money) === 'number') {
            await settingServices.updateFee(money);
            message.success('Cập nhật học phí thành công !');
        }
        else
            message.error('Giá trị không hợp lệ, hãy nhập lại !');
    }

    return (
        <Fragment>
            <Layouts text='Cài đặt'>
                <div className='setting-content'>
                    <Form
                        layout='vertical'
                    >
                        <Form.Item
                            label='Học phí mỗi tháng'
                            labelAlign='left'
                        >
                            <Input
                                type='text'
                                value={numberWithCommas(money)}
                                onChange={(e) => handleOnChange(e)}
                                maxLength={10}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' onClick={handleOnClick}>
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Layouts>
        </Fragment>
    )
}

export default Setting;

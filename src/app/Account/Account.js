import './Account.scss';
import { Form, Input, Button } from 'adapters/ant-design';

import firebase from 'helper/firebaseConfig';
import { Fragment } from 'react';
import Layouts from 'shared/layouts/index';

export default function Account() {
    return (
        <Fragment>
            <Layouts text='Tài khoản'>
                <div className="account-content">
                    <div className="profile">
                        <div className="header">
                            <p>Thông tin tài khoản</p>
                        </div>
                        <Form layout='vertical'>
                            <Form.Item label='Tên người dùng:'>
                                <Input type='text' placeholder='Nhập tên của bạn' />
                            </Form.Item>
                            <Button type='primary'>Cập nhật</Button>
                        </Form>
                    </div>
                    <div className="password">
                        <div className="header">
                            <p>Đổi mật khẩu</p>
                        </div>
                        <Form layout='vertical'>
                            <Form.Item label='Mật khẩu cũ:' >
                                <Input type='password' placeholder='Nhập mật khẩu cũ' />
                            </Form.Item>
                            <Form.Item label='Mật khẩu mới:'>
                                <Input type='password' placeholder='Nhập mật khẩu mới' />
                            </Form.Item>
                            <Button type='primary'>Cập nhật</Button>
                        </Form>
                    </div>
                </div>
            </Layouts>
        </Fragment>
    )
}

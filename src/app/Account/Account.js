import './Account.scss';
import { Form, Input, Button, message } from 'adapters/ant-design';

import firebase from 'helper/firebaseConfig';
import { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/Redux/Auth';

import Layouts from 'shared/layouts/index';

export default function Account() {

    const dispatch = useDispatch();

    const [user, setUserState] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [pass, setPass] = useState({ newPass: '', reNewPass: '' });


    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                setUserState(user);
                setDisplayName(user.displayName);
            }
            else {
                //setUserState(null);
            }
        })
    }, [])

    const handleUpdateDisplayName = () => {
        user.updateProfile({
            displayName: displayName
        }).then(function () {
            dispatch(setUser({ displayName: displayName, photoURL: '' }));
            message.success('Cập nhật tên thành công !');
        }).catch(function (error) {
            message.error('Đã xảy ra lỗi !');
            console.log(error);
        })
    }

    const handleChangePass = () => {
        if (pass.newPass !== '' && pass.newPass === pass.reNewPass) {
            user.updatePassword(pass.newPass)
                .then(function () {
                    message.success('Đổi mật khẩu thành công!');
                    setPass({ newPass: '', reNewPass: '' })
                })
                .catch(function (error) {
                    switch (error.code) {
                        case 'auth/requires-recent-login':
                            message.warn('Bạn phải đăng xuất và đăng nhập lại trước khi đổi mật khẩu !');
                            break;
                        default:
                            message.error(error.message);
                            break;
                    }

                    console.log(error.code);
                })
        }
        else {
            message.error('Nhập lại mật khẩu không chính xác!');
        }
    }

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
                                <Input
                                    type='text'
                                    placeholder='Nhập tên của bạn'
                                    value={displayName}
                                    onChange={e => setDisplayName(e.target.value)}
                                />
                            </Form.Item>
                            <Button type='primary' onClick={handleUpdateDisplayName}>Cập nhật</Button>
                        </Form>
                    </div>
                    <div className="password">
                        <div className="header">
                            <p>Đổi mật khẩu</p>
                        </div>
                        <Form layout='vertical'>
                            <Form.Item label='Mật khẩu mới:' >
                                <Input
                                    type='password'
                                    placeholder='Nhập mật khẩu mới'
                                    value={pass.newPass}
                                    onChange={e => setPass({ ...pass, newPass: e.target.value })}
                                />
                            </Form.Item>
                            <Form.Item label=' Nhập lại mật khẩu mới:'>
                                <Input
                                    type='password'
                                    placeholder='Nhập lại mật khẩu mới'
                                    value={pass.reNewPass}
                                    onChange={e => setPass({ ...pass, reNewPass: e.target.value })}
                                />
                            </Form.Item>
                            <Button type='primary' onClick={handleChangePass}>Cập nhật</Button>
                        </Form>
                    </div>
                </div>
            </Layouts>
        </Fragment>
    )
}

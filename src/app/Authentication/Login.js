import './Login.scss';
import { Input, Button } from 'adapters/ant-design';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import firebase from 'helper/firebaseConfig';

const Login = () => {
    const { isLoggedIn } = useSelector(state => state.authReducer);

    const [text, setText] = useState({ email: '', pass: '' });

    const onSignIn = () => {
        firebase.auth.signInWithEmailAndPassword(text.email, text.pass)
            .then((userCredential) => {
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    if (isLoggedIn === true) {
        return <Redirect to='/' />
    }

    return (
        <div className='login-wrapper'>
            <div className='login-header'>
                <img className='logo' src="" alt="" />
            </div>
            <div className='login-content'>
                <h1 className="text">Đăng nhập</h1>
                <div className="box-login">
                    <div className="item">
                        <p>Email</p>
                        <Input type='email' placeholder='email@gmail.com' value={text.email} onChange={(e) => setText({ ...text, email: e.target.value })} />
                    </div>
                    <div className="item">
                        <p>Mật khẩu</p>
                        <Input type='password' placeholder='Nhập mật khẩu' value={text.pass} onChange={(e) => setText({ ...text, pass: e.target.value })} />
                    </div>
                    <div className="item">
                        <Button type='primary' onClick={onSignIn}>Đăng nhập</Button>
                    </div>
                </div>
                <div className="box-register">
                    <span>Tạo tài khoản mới</span>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Login);

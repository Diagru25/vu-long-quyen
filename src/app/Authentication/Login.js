import './Login.scss';
import { Input, Button } from 'adapters/ant-design';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const { user } = useSelector(state => state.authReducer);

    if (user) {
        <Redirect to='/' />
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
                        <Input type='email' placeholder='email@gmail.com' />
                    </div>
                    <div className="item">
                        <p>Mật khẩu</p>
                        <Input type='password' placeholder='Nhập mật khẩu' />
                    </div>
                    <div className="item">
                        <Button type='primary'>Đăng nhập</Button>
                    </div>
                </div>
                <div className="box-register">
                    <span>Tạo tài khoản mới</span>
                </div>
            </div>
        </div>
    )
};

export default Login;

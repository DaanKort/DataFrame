import React, { useState } from 'react'
import { useDispatch, useSelector, } from "react-redux";
import Button from "../button/index";
import Input from "../input/index"
import { requestLogin } from "../../actions/actions";

interface ILogin {
  auth: {
    loginErrorMessage: string
  }
  message: string
}

const Loginform: React.FC = () => {
  const loginError = useSelector<ILogin>(state => state.auth.loginErrorMessage) as ILogin;
  const loginErrorMsg: string = loginError.message;
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [AuthError, setAuthError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };


  const handleLogin = () => {
    dispatch(
      requestLogin({
        email: user.email,
        password: user.password
      })
    );
    setAuthError('');
    setAuthError(loginErrorMsg);
  }

  return (
    <div className='form'>
      <h2 className='news__title'>Login</h2>
      {
        <p>{AuthError}</p>
      }
      <Input
        type="email"
        name="email"
        inputPlaceholder='Email'
        inputWrapperClass='signup-input'
        onInputChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        inputPlaceholder='Password'
        inputWrapperClass='signup-input'
        onInputChange={handleChange}
      />
      <Button
        buttonText="Login"
        buttonClass="button button-primary"
        onClick={handleLogin}
        onTouch={handleLogin}
      />
    </div>
  )
}

export default Loginform;

import React, { useState } from 'react'
import { useDispatch, useSelector, } from "react-redux";
import Button from "../button/index";
import Input from "../input/index"
import { requestLogin } from "../../actions/actions";

interface IError {
  error: {
    loginErrorMessage: string
  }
  message: string
}

const Loginform: React.FC = () => {
  const loginError = useSelector<IError>(state => state.error.loginErrorMessage) as IError;
  const loginErrorMsg: string = loginError && loginError.message;
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });


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
  }

  return (
    <div className='form'>
      <h2 className='news__title'>Login</h2>
      {
        <p>{loginErrorMsg}</p>
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

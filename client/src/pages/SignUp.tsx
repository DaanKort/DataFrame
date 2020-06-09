import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestRegister, requestLogin } from "../actions/actions";
import Button from "../components/button/index";
import Input from "../components/input/index"

export default function SignUp() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: '', 
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  const handleSignUp = () => {
    dispatch(
      requestRegister({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
    );
  };

  const handleLogin = () => {
    dispatch(
      requestLogin({
        email: user.email,
        password: user.password
      })
    )
  }

  return (
    <>
     
     <div className="form-container">
        <div className='form'>
          <h2 className='news__title'>Login</h2>
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
            onClick={() => handleLogin()}
          />
        </div>
        <div className='form'>
          <h2 className='news__title'>Sign Up</h2>
          <Input 
            type="text" 
            name="firstName" 
            inputPlaceholder='First Name' 
            inputWrapperClass='signup-input'
            onInputChange={handleChange}
          />
          <Input 
            type="text" 
            name="lastName" 
            inputPlaceholder='Last Name' 
            inputWrapperClass='signup-input'
            onInputChange={handleChange}
          />
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
            buttonText="Register"
            buttonClass="button button-primary"
            onClick={() => handleSignUp()}
          />
        </div>
     </div>
    </>
  );
}

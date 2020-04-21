import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IError, IUser } from "../interfaces";
import { requestRegister } from "../actions/actions";

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

  const handleSubmit = () => {
    dispatch(
      requestRegister({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
    );
  };

  return (
    <>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        defaultValue=""
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        defaultValue=""
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        defaultValue=""
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        defaultValue=""
        placeholder="Password"
      />
      <button onClick={() => handleSubmit()}>Register</button>
    </>
  );
}

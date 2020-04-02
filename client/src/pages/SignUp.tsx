import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IError, IUser } from "../interfaces";
import { requestLogin } from "../actions/actions";

export default function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector<IUser, any>(state => ({
    isAuthenticated: state.isAuthenticated,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password
  }));
  const error = useSelector<IError, any>(state => ({
    status: state.status,
    message: state.message,
    id: state.id
  }));

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    token: null
  });

  const handleChange = (e: any) => {
    setState(([e.target.name] = e.target.value));
  };

  const handleSubmit = () => {
    dispatch(
      requestLogin({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password
      })
    );
  };

  return <div></div>;
}

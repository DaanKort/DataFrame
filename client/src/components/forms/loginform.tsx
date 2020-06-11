import React, { useState } from 'react'
import { useDispatch, useSelector, } from "react-redux";
import Button from "../button/index";
import Input from "../input/index"
import { requestLogin } from "../../actions/actions";

const Loginform: React.FC = () => {
    const loginError: any = useSelector<any>(state => state.auth.loginErrorMessage);
    const loginErrorMsg = loginError.message;
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
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
                loginError && <p>{loginErrorMsg}</p>
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
                onClick={() => handleLogin()}
            />
        </div>
    )
}

export default Loginform;

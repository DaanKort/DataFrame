import React, { useState } from 'react'
import { useDispatch, useSelector, } from "react-redux";
import Button from "../button/index";
import Input from "../input/index"
import { requestRegister } from "../../actions/actions";


const SignUpForm: React.FC = () => {
    const signupError: any = useSelector<any>(state => state.auth.signUpErrorMessage);
    const signupErrorMsg = signupError.message;
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

    const handleSignUp = () => {
        dispatch(
            requestRegister({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            }),
        );
        !signupError && console.log('redirected');
    };
    return (
        <div className='form'>
            <h2 className='news__title'>Sign Up</h2>
            {
                signupError && <p>{signupErrorMsg}</p>
            }
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
    )
}

export default SignUpForm;

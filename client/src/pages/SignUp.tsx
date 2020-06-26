import React from "react";
import LoginForm from '../components/forms/loginform';
import SignUpForm from '../components/forms/signUpForm';

const SignUp: React.FC = () => {

  return (
    <>
      <div className="form-container">
        <LoginForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
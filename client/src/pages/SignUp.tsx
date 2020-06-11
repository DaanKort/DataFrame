import React, { useState } from "react";
import LoginForm from '../components/forms/loginform';
import SignUpForm from '../components/forms/signUpForm';


interface signUpProps {
  error: string
}

// export default function SignUp(props: any) {
const SignUp: React.FC<signUpProps> = () => {

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
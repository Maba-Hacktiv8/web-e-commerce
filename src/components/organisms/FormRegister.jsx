import React from 'react';
import InputForm from '../moleculs/InputForm';
import Button from '../moleculs/Button';

const FormRegister = () => {
  return (
    <form className="mt-6">
      <InputForm placeholder="Enter Email Address" type="email" htmlFor="email" name="email">
        Email
      </InputForm>

      <InputForm placeholder="Enter Username" type="text" htmlFor="username" name="username">
        Username
      </InputForm>

      <InputForm placeholder="Enter Password" type="password" htmlFor="password" name="password">
        Password
      </InputForm>

      <InputForm
        placeholder="Confirm Password"
        type="password"
        htmlFor="confirmPassword"
        name="confirmPassword"
      >
        Confirm Password
      </InputForm>

      <Button>Register</Button>
    </form>
  );
};

export default FormRegister;

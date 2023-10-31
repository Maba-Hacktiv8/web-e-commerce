import React from 'react';
import InputForm from '../moleculs/InputForm';
import Button from '../moleculs/Button';

const FormLogin = () => {
  return (
    <form className="mt-6">
      <InputForm placeholder="example@gmail.com" type="email" htmlFor="email" name="email">
        Email
      </InputForm>

      <InputForm placeholder="Enter Password" type="password" htmlFor="password" name="password">
        Password
      </InputForm>

      <Button>Login</Button>
    </form>
  );
};

export default FormLogin;

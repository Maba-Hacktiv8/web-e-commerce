import React from 'react';
import InputForm from '../moleculs/InputForm';
import Button from '../moleculs/Button';
import { register } from '../../services/auth.service';

const FormRegister = () => {
  const handleRegister = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      username: event.target.username.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    register(data, (status, res) => {
      if (status) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };

  return (
    <form className="mt-6" onSubmit={handleRegister}>
      <InputForm placeholder="Enter Email Address" type="email" htmlFor="email" name="email">
        Email
      </InputForm>

      <InputForm placeholder="Enter Username" type="text" htmlFor="username" name="username">
        Username
      </InputForm>

      <InputForm placeholder="Fullname" type="text" htmlFor="fullname" name="fullname">
        Fullname
      </InputForm>

      <InputForm placeholder="Enter Password" type="password" htmlFor="password" name="password">
        Password
      </InputForm>

      <Button type={'submit'} className="w-full">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;

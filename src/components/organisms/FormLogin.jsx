import React from 'react';
import InputForm from '../moleculs/InputForm';
import Button from '../moleculs/Button';
import { login } from '../../services/auth.service';
import { useEffect } from 'react';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = React.useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/products';
    }
  }, []);

  return (
    <form className="mt-6" onSubmit={handleLogin}>
      <InputForm placeholder="username" type="text" htmlFor="username" name="username">
        Username
      </InputForm>

      <InputForm placeholder="Enter Password" type="password" htmlFor="password" name="password">
        Password
      </InputForm>

      {loginFailed && <p className="text-red-600 text-center mt-5">{loginFailed}</p>}
      <Button
        type={'submit'}
        classname="w-full bg-blue-600 text-white flex justify-center hover:bg-blue-500"
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;

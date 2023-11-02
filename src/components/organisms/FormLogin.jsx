import React from 'react';
import InputForm from '../moleculs/InputForm';
import Button from '../moleculs/Button';
import { login } from '../../services/auth.service';

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

  return (
    <form className="mt-6" onSubmit={handleLogin}>
      <InputForm placeholder="johnd" type="text" htmlFor="username" name="username">
        Username
      </InputForm>

      <InputForm placeholder="Enter Password" type="password" htmlFor="password" name="password">
        Password
      </InputForm>

      {loginFailed && <p className="text-red-600 text-center mt-5">{loginFailed}</p>}
      <Button type={'submit'}>Login</Button>
    </form>
  );
};

export default FormLogin;

import React from 'react';
import AuthLayout from '../components/templates/AuthLayout';
import FormLogin from '../components/organisms/FormLogin';

const LoginPage = () => {
  return (
    <AuthLayout type={'login'}>
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;

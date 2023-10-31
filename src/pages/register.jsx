import React from 'react';
import AuthLayout from '../components/templates/AuthLayout';
import FormRegister from '../components/organisms/FormRegister';

const RegisterPage = () => {
  return (
    <AuthLayout type={'register'}>
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;

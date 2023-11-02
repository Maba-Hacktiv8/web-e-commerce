import React from 'react';
import { useLogin } from './../hooks/useLogin';

const ProfilePage = () => {
  const username = useLogin();
  return <div>ProfilePage : {username}</div>;
};

export default ProfilePage;

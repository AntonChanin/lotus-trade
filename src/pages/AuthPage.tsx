import React, { FC } from 'react';

import AuthForm from '../components/AuthForm';

const AuthPage: FC = () => {

  return (
    <div className="flex justify-center mx-auto h-[calc(100vh-100px)]">
      <div className="flex flex-col max-w-[1024px]">
        <div className="container">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
   
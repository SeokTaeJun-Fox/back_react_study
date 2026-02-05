import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';

const AuthLayout = () => {
 
     const {
    isLogin, previousUrl
  } = useAuthStore()

  //뒤로가기 목록을 남길 필요없다.
  if(!isLogin) return <Navigate to={"/"} replace={true} />

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
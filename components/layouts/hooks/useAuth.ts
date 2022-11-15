import { AUTH } from '@consts/LocalStorage';
import { useEffect, useState } from 'react';

import { getStorage } from '../../../utils/localStorage';

export const useAuth = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getStorage(AUTH);
    if (token) {
      setIsLogin(true);
      setIsLoaded(true);
    } else {
      setIsLogin(false);
      setIsLoaded(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH);
    setIsLogin(false);
    location.href = '/auth/login';
  };

  return { isLoaded, isLogin, logout };
};

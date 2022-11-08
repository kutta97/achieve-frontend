import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoginRq } from '../../../../rqrs/auth/loginRqrs';

export const useLogin = () => {
  const { loginStore } = useStores();

  const form = useForm<LoginRq>({ mode: 'all' });
  const {
    register,
    getValues,
    setFocus,
    trigger,
    formState: { errors },
  } = form;

  const [focusError, setFocusError] = useState(false);

  useEffect(() => {
    if (!focusError) return;
    if (errors?.email?.message) {
      setFocus('email');
      setFocusError(false);
      return;
    }
    if (errors?.password?.message) {
      setFocus('password');
      setFocusError(false);
      return;
    }
  }, [focusError]);

  const handleLoginClick = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    await loginStore.login(data);
  };

  return {
    handleLoginClick,
    register,
    errors,
  };
};

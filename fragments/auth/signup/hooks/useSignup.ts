import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignupRq } from '../../../../rqrs/auth/signupRqrs';

export const useSignup = () => {
  const { signupStore } = useStores();

  const form = useForm<SignupRq>({ mode: 'all' });
  const {
    control,
    getValues,
    setFocus,
    trigger,
    formState: { errors },
  } = form;

  const [focusError, setFocusError] = useState(false);

  useEffect(() => {
    if (!focusError) return;
    if (errors?.name?.message) {
      setFocus('name');
      setFocusError(false);
      return;
    }
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
  }, [
    focusError,
    errors?.name?.message,
    errors?.email?.message,
    errors?.password?.message,
    setFocus,
  ]);

  const handleSignupClick = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    await signupStore.signup(data);
  };

  return {
    handleSignupClick,
    control,
  };
};

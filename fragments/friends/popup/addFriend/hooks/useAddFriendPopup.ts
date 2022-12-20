import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { AddFriendPopupFormDataType } from '../AddFriendPopupFormDataType';

export const useAddFriendPopup = () => {
  const { friendsStore } = useStores();

  const form = useForm<AddFriendPopupFormDataType>({ mode: 'all' });
  const {
    getValues,
    setFocus,
    trigger,
    formState: { errors },
    setError,
    control,
  } = form;

  const [focusError, setFocusError] = useState(false);

  useEffect(() => {
    if (!focusError) return;
    if (errors?.email?.message) {
      setFocus('email');
      setFocusError(false);
      return;
    }
  }, [focusError, errors?.email?.message, setFocus]);

  const onSubmit = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    return await friendsStore.requestFriend(data);
  };

  return {
    onSubmit,
    setError,
    control,
  };
};

import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { GroupCreatePopupFormDataType } from '../groupCreatePopupFormDataType';

export const useGroupCreatePopup = () => {
  const { groupsStore } = useStores();

  const form = useForm<GroupCreatePopupFormDataType>({ mode: 'all' });
  const {
    getValues,
    setFocus,
    trigger,
    formState: { errors },
    control,
  } = form;

  const [focusError, setFocusError] = useState(false);

  useEffect(() => {
    if (!focusError) return;
    if (errors?.name?.message) {
      setFocus('name');
      setFocusError(false);
      return;
    }
  }, [focusError, errors?.name?.message, setFocus]);

  const onSubmit = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    return await groupsStore.createGroup(data);
  };

  const loadGroupList = () => {
    groupsStore.initGroupList();
  };

  return {
    onSubmit,
    loadGroupList,
    control,
  };
};

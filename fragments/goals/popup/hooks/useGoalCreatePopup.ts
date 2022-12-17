import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { GoalCreatePopupFormDataType } from '../GoalCreatePopupFormDataType';

export const useGoalCreatePopup = () => {
  const { goalStore } = useStores();

  const form = useForm<GoalCreatePopupFormDataType>({ mode: 'all' });
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
    if (errors?.examTitle?.message) {
      setFocus('examTitle');
      setFocusError(false);
      return;
    }
    if (errors?.score?.message) {
      setFocus('score');
      setFocusError(false);
      return;
    }
  }, [
    focusError,
    errors?.examTitle?.message,
    errors?.score?.message,
    setFocus,
  ]);

  const handleCreateClick = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    await goalStore.createExamGoal(data);
  };

  return {
    handleCreateClick,
    control,
  };
};

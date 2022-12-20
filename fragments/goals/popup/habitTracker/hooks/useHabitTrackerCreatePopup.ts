import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { HabitTrackerCreatePopupFormDataType } from '../HabitTrackerCreatePopupFormDataType';

export const useHabitTrackerCreatePopup = () => {
  const { goalsStore } = useStores();

  const form = useForm<HabitTrackerCreatePopupFormDataType>({ mode: 'all' });
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
    if (errors?.title?.message) {
      setFocus('title');
      setFocusError(false);
      return;
    }
    if (errors?.repeatDays?.message) {
      setFocus('repeatDays');
      setFocusError(false);
      return;
    }
  }, [
    focusError,
    errors?.title?.message,
    errors?.repeatDays?.message,
    setFocus,
  ]);

  const onSubmit = async (goalId: number) => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    return await goalsStore.createHabitTracker(goalId, data);
  };

  const loadGoalList = () => {
    goalsStore.initExamGoalList();
  };

  return {
    onSubmit,
    loadGoalList,
    control,
  };
};

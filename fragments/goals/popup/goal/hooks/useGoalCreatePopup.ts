import { useStores } from '@hooks/useStores';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ExamGoalScoreTypeKey } from '../../../../../types/examGoalScoreType';
import { GoalCreatePopupFormDataType } from '../GoalCreatePopupFormDataType';

export const useGoalCreatePopup = () => {
  const { goalsStore } = useStores();

  const form = useForm<GoalCreatePopupFormDataType>({ mode: 'all' });
  const {
    getValues,
    setValue,
    setFocus,
    trigger,
    formState: { errors },
    control,
  } = form;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [focusError, setFocusError] = useState(false);

  const compareDates = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start > end;
  };

  useEffect(() => {
    if (endDate === '') return;
    compareDates() && changeEndDate(startDate);
  }, [startDate]);

  useEffect(() => {
    if (startDate === '') return;
    compareDates() && changeStartDate(endDate);
  }, [endDate]);

  const changeStartDate = (date: string) => {
    setStartDate(date);
    setValue('startDate', date);
  };

  const changeEndDate = (date: string) => {
    setEndDate(date);
    setValue('endDate', date);
  };

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

  const handleScoreTypeChange = (scoreType: ExamGoalScoreTypeKey) => {
    switch (scoreType) {
      case ExamGoalScoreTypeKey.NUMBER: {
        return setValue('score', '');
      }
      case ExamGoalScoreTypeKey.LETTER: {
        return setValue('score', 'A+');
      }
      case ExamGoalScoreTypeKey.PERCENTAGE: {
        return setValue('score', '');
      }
    }
  };

  const onSubmit = async () => {
    const isValid = await trigger();

    if (!isValid) {
      setFocusError(true);
      return;
    }
    const data = getValues();
    return await goalsStore.createExamGoal(data);
  };

  const loadGoalList = () => {
    goalsStore.initExamGoalList();
  };

  return {
    handleScoreTypeChange,
    onSubmit,
    loadGoalList,
    startDate,
    endDate,
    changeStartDate,
    changeEndDate,
    control,
  };
};

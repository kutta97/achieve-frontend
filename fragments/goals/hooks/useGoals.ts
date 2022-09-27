import { useStores } from '@hooks/useStores';
import { IExamGoal } from '@vo/goals/IExamGoal';
import { useEffect, useState } from 'react';

export const useGoals = () => {
  const { goalsStore } = useStores();

  const [examGoalList, setExamGoalList] = useState<IExamGoal[]>();

  useEffect(() => {
    goalsStore.examGoalList && setExamGoalList(goalsStore.examGoalList);
  }, [goalsStore.examGoalList]);

  return { examGoalList };
};

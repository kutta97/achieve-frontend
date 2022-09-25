import { useStores } from '@hooks/useStores';
import { IRecentExamGoal } from '@vo/overview/IRecentExamGoal';
import { useEffect, useState } from 'react';

export const useRecentExamGoals = () => {
  const { overviewStore } = useStores();

  const [examGoalList, setExamGoalList] = useState<IRecentExamGoal[]>();

  useEffect(() => {
    overviewStore.recentExamGoalList &&
      setExamGoalList(overviewStore.recentExamGoalList);
  }, [overviewStore.recentExamGoalList]);

  return { examGoalList };
};

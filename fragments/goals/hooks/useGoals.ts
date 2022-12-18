import { useStores } from '@hooks/useStores';
import { IExamGoal } from '@vo/goals/IExamGoal';
import { useEffect, useState } from 'react';

export const useGoals = () => {
  const { goalsStore } = useStores();

  const [examGoalList, setExamGoalList] = useState<IExamGoal[]>();

  const [currPage, setCurrPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    goalsStore.examGoalList && setExamGoalList(goalsStore.examGoalList);
  }, [goalsStore.examGoalList]);

  useEffect(() => {
    if (currPage != prevPage) {
      goalsStore.loadExamGoalList(currPage);
      setPrevPage(currPage);
    }
  }, [currPage]);

  const getNextGoals = (pageNumber: number) => {
    if (currPage < pageNumber) {
      setCurrPage(pageNumber);
    }
  };

  return {
    totalGoalCount: goalsStore.totalGoalCount,
    examGoalList,
    getNextGoals,
  };
};

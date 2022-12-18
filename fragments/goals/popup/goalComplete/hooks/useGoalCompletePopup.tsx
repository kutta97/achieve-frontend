import { useStores } from '@hooks/useStores';

export const useGoalCompletePopup = () => {
  const { goalsStore } = useStores();

  const onComplete = async (goalId: number, achieved: boolean) => {
    return await goalsStore.completeGoal(goalId, achieved);
  };

  const loadGoalList = () => {
    goalsStore.initExamGoalList();
  };

  return { onComplete, loadGoalList };
};

import { useStores } from '@hooks/useStores';

export const useHabitTracker = () => {
  const { goalsStore } = useStores();

  const onCheckHabitTracker = (goalId: number, habitId: number) => {
    goalsStore.checkHabitTracker(goalId, habitId);
  };

  return { onCheckHabitTracker };
};

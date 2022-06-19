import { useEffect, useState } from "react";
import { useStores } from "../../stores";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";

export const useGoals = () => {
  const {goalStore} = useStores();

  const [examGoals, setExamGoals] = useState<ExamGoalVO[]>([]);

  useEffect(() => {
    setExamGoals(goalStore.examGoals);
  }, goalStore.examGoals)

  return {examGoals};
}
import { ExamGoalStatusType } from '../../types/examGoalStatusType';

export interface IRecentExamGoal {
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
}

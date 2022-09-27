import { ExamGoalStatusType } from '../../types/examGoalStatusType';

export interface IExamGoal {
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
  habitTrackers?: IHabitTracker[];
}

export interface IHabitTracker {
  title?: string;
  isDone?: boolean;
  repeatDay?: number[];
}

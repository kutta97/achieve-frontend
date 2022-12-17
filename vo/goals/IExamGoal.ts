import { ExamGoalStatusType } from '../../types/examGoalStatusType';
import { WeekDayNameType } from '../../types/weekDayNameType';

export interface IExamGoal {
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
  habitTrackers?: IHabitTracker[];
}

export interface IHabitTracker {
  habitId?: number;
  title?: string;
  isDone?: boolean;
  repeatDay?: WeekDayNameType[];
}

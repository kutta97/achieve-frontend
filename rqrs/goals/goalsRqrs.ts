import { ExamGoalScoreType } from '../../types/examGoalScoreType';
import { ExamGoalStatusType } from '../../types/examGoalStatusType';

export interface GoalListRq {
  pageNumber?: number;
  pageSize?: number;
}

export interface HabitTracker {
  habitId?: number;
  title?: string;
  isDone?: boolean;
  repeatDays?: string;
}

export interface GoalItem {
  goalId?: number;
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
  habitTrackers?: HabitTracker[];
}

export interface GoalListRs {
  content?: GoalItem[];
  pageNumber?: number;
  pageSize?: number;
  totalItem?: number;
}

export interface GoalData {
  examTitle?: string;
  scoreType?: ExamGoalScoreType;
  score?: string;
  startDate?: string;
  endDate?: string;
}

export interface EditGoalData {
  examTitle?: string;
  scoreType?: ExamGoalScoreType;
  score?: string;
  startDate?: string;
  endDate?: string;
  goalStatus?: ExamGoalStatusType;
}

export interface GoalRs {
  goal?: GoalData;
}

export interface CreateGoalRq {
  goal?: GoalData;
}

export interface EditGoalRq {
  goal: EditGoalData;
}

export interface HabitTrackersRs {
  habitTrackers?: HabitTracker[];
}

export interface HabitTrackerRs {
  habitTracker?: HabitTracker;
}

export interface CreateHabitTrackerRq {
  habitTracker?: {
    title?: string;
    repeatDays?: string;
  };
}

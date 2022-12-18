import { ExamGoalStatusType } from '../../types/examGoalStatusType';

export interface OverviewGoalItem {
  goalId?: number;
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
}

export interface ActivityDetail {
  name?: string;
  date?: string;
}

export interface RecentActivityItem {
  month?: number;
  year?: number;
  createdGoals?: ActivityDetail[];
  achievedGoals?: ActivityDetail[];
  gainedBadges?: ActivityDetail[];
}

export interface OverviewGoalsRs {
  goals?: OverviewGoalItem[];
}

export interface OverviewActivityRs {
  activities?: RecentActivityItem;
  totalItem?: number;
}

export interface OverviewActivityRq {
  pageNumber?: number;
}

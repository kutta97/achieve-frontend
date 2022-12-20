import { ExamGoalStatusType } from '../../types/examGoalStatusType';
import { HabitTracker } from '../goals/goalsRqrs';

export interface GroupListRq {
  pageNumber?: number;
  pageSize?: number;
}

export interface MemberItem {
  memberId?: number;
  name?: string;
  imgSrc?: string;
  description?: string;
}

export interface GroupGoalItem {
  goalId?: number;
  title?: string;
  period?: string;
  dDay?: string;
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
  habitTrackers?: HabitTracker[];
}

export interface GroupItem {
  groupId?: number;
  name?: string;
  members?: MemberItem[];
  groupGoals?: GroupGoalItem[];
}

export interface GroupListRs {
  content?: GroupItem[];
  pageNumber?: number;
  pageSize?: number;
  totalItem?: number;
}

export interface groupData {
  name?: string;
  members?: number[];
}

export interface EditGroupData {
  name?: string;
  members?: number[];
}

export interface GroupRs {
  group?: groupData;
}

export interface CreateGroupRq {
  group?: groupData;
}

export interface EditGroupRq {
  group: EditGroupData;
}

import {
  CreateGoalRq,
  CreateHabitTrackerRq,
  EditGoalRq,
  GoalListRq,
  GoalListRs,
  GoalRs,
  HabitTrackerRs,
  HabitTrackersRs,
} from '../../rqrs/goals/goalsRqrs';
import api from '../../utils/api';

export const getGoalList = async (rq: GoalListRq) => {
  return await api.get<GoalListRs>('/goals', rq);
};

export const getGoal = async (goalId: number) => {
  return await api.get<GoalRs>(`/goals/${goalId}`);
};

export const createGoal = async (rq: CreateGoalRq) => {
  return await api.post('/goals', rq);
};

export const editGoal = async (goalId: number, rq: EditGoalRq) => {
  return await api.put(`/goals/${goalId}`, rq);
};

export const deleteGoal = async (goalId: number) => {
  return await api.deleted(`/goals/${goalId}`);
};

export const getHabitTrackers = async (goalId: number) => {
  return await api.get<HabitTrackersRs>(`/goals/${goalId}/habits`);
};

export const getHabitTracker = async (goalId: number, habitId: number) => {
  return await api.get<HabitTrackerRs>(`/goals/${goalId}/habits/${habitId}`);
};

export const createHabitTracker = async (
  goalId: number,
  rq: CreateHabitTrackerRq
) => {
  return await api.post(`/goals/${goalId}/habits`, rq);
};

export const checkHabitTracker = async (goalId: number, habitId: number) => {
  return await api.post(`/goals/${goalId}/habits/${habitId}`);
};

export const deleteHabitTracker = async (goalId: number, habitId: number) => {
  return await api.deleted(`/goals/${goalId}/habits/${habitId}`);
};

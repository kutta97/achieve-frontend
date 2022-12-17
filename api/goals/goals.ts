import {
  CreateGoalRq,
  EditGoalRq,
  GoalListRq,
  GoalListRs,
  GoalRs,
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

import { CreateGoalRq } from '../../rqrs/goals/goalsRqrs';
import {
  CreateGroupRq,
  GroupListRq,
  GroupListRs,
} from '../../rqrs/groups/groupRqrs';
import api from '../../utils/api';

export const getGroupList = async (rq: GroupListRq) => {
  return await api.get<GroupListRs>('/groups', rq);
};

export const getGroup = async (groupId: number) => {
  return await api.get<GroupListRs>(`/groups/${groupId}`);
};

export const createGroup = async (rq: CreateGroupRq) => {
  return await api.post('/groups', rq);
};

export const createGroupGoal = async (groupId: number, rq: CreateGoalRq) => {
  return await api.post(`/groups/${groupId}/goal`, rq);
};

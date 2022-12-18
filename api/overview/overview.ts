import {
  OverviewActivityRq,
  OverviewActivityRs,
  OverviewGoalsRs,
} from '../../rqrs/overview/overviewRqrs';
import api from '../../utils/api';

export const getOverviewGoals = async () => {
  return await api.get<OverviewGoalsRs>('/overview/goals');
};

export const getOverviewActivity = async (rq: OverviewActivityRq) => {
  return await api.get<OverviewActivityRs>('/overview/activity', rq);
};

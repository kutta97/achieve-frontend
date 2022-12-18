import { IRecentActivity } from '@vo/overview/IRecentActivity';
import { IRecentExamGoal } from '@vo/overview/IRecentExamGoal';
import { makeObservable, observable } from 'mobx';

import {
  getOverviewActivity,
  getOverviewGoals,
} from '../../api/overview/overview';
import {
  OverviewActivityRq,
  OverviewActivityRs,
  OverviewGoalsRs,
} from '../../rqrs/overview/overviewRqrs';

export class OverviewStore {
  recentExamGoalList: IRecentExamGoal[] = [];
  recentActivityList: IRecentActivity[] = [];

  constructor() {
    makeObservable(this, {
      recentExamGoalList: observable,
      recentActivityList: observable,
    });
    this.loadOverview();
  }

  loadOverview() {
    this.loadOverviewGoals();
    this.loadOverviewActivity();
  }

  loadOverviewGoals() {
    this.getOverviewGoals().then((goals) => {
      this.recentExamGoalList = goals;
    });
  }

  loadOverviewActivity(pageNumber?: number) {
    this.getOverviewActivity(pageNumber).then((activity) => {
      this.recentActivityList = [...this.recentActivityList, activity];
    });
  }

  async getOverviewGoals() {
    try {
      const rs = (await getOverviewGoals()).data;
      return this.toRecentExamGoalListVO(rs);
    } catch (e) {
      console.log(e);
    }
  }

  async getOverviewActivity(pageNumber = 0) {
    try {
      const rq: OverviewActivityRq = {
        pageNumber: pageNumber,
      };
      const rs = (await getOverviewActivity(rq)).data;
      console.log('rs', rs);
      return this.toRecentActivityVO(rs);
    } catch (e) {}
  }

  toRecentExamGoalListVO(rs: OverviewGoalsRs): IRecentExamGoal[] {
    return rs.goals.map((goal) => ({
      goalId: goal.goalId,
      title: goal.title,
      period: goal.period,
      dDay: goal.dDay,
      goalStatus: goal.goalStatus,
      isGroupGoal: goal.isGroupGoal,
    }));
  }

  toRecentActivityVO(rs: OverviewActivityRs): IRecentActivity {
    return {
      year: rs.activities.year,
      month: rs.activities.month,
      createdGoals: rs.activities.createdGoals,
      achievedGoals: rs.activities.achievedGoals,
      gainedBadges: rs.activities.gainedBadges,
    };
  }
}

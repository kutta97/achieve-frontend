import { IRecentActivity } from '@vo/overview/IRecentActivity';
import { IRecentExamGoal } from '@vo/overview/IRecentExamGoal';
import { makeObservable, observable } from 'mobx';

export class OverviewStore {
  recentExamGoalList: IRecentExamGoal[];
  recentActivityList: IRecentActivity[];

  constructor() {
    makeObservable(this, {
      recentExamGoalList: observable,
      recentActivityList: observable,
    });
    this.loadOverview();
  }

  loadOverview() {
    this.getRecentExamGoalList().then();
    this.getRecentActivityList().then();
  }

  async getRecentExamGoalList() {
    try {
      this.recentExamGoalList = [
        {
          title: '소프트웨어 공학 B+ 이상 받는다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D-108',
          goalStatus: 'ACHIEVING',
          isGroupGoal: true,
        },
        {
          title: '운전면허시험 합격한다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D+108',
          goalStatus: 'ACHIEVING',
          isGroupGoal: false,
        },
        {
          title: 'TOEIC 시험 853점 받았다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D+108',
          goalStatus: 'ACHIEVED',
          isGroupGoal: false,
        },
        {
          title: '정보처리기사 합격했다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D-108',
          goalStatus: 'FAILED',
          isGroupGoal: true,
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }

  async getRecentActivityList() {
    try {
      this.recentActivityList = [
        {
          month: 8,
          year: 2022,
          createdGoals: [
            {
              name: '“소프트웨어 공학 B+ 이상 받는다!”',
              date: 'Mon, Aug 6 2022, 08:12 PM',
            },
            {
              name: '“운전면허시험 합격한다!”',
              date: 'Tue, Aug 6 2022, 09:12 PM',
            },
          ],
          achievedGoals: [
            {
              name: '“소프트웨어 공학 B+ 이상 받는다!”',
              date: 'Mon, Aug 6 2022, 08:12 PM',
            },
          ],
          gainedBadges: [
            {
              name: '“Cactus Badge”',
              date: 'Mon, Aug 6 2022, 08:12 PM',
            },
          ],
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }
}

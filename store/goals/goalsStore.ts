import { IExamGoal } from '@vo/goals/IExamGoal';
import { makeObservable, observable } from 'mobx';

import { createGoal } from '../../api/goals/goals';
import { GoalCreatePopupFormDataType } from '../../fragments/goals/popup/GoalCreatePopupFormDataType';
import { CreateGoalRq } from '../../rqrs/goals/goalsRqrs';

export class GoalsStore {
  examGoalList: IExamGoal[];

  constructor() {
    makeObservable(this, {
      examGoalList: observable,
    });
    this.loadExamGoalList();
  }

  loadExamGoalList() {
    this.getExamGoalList().then();
  }

  async getExamGoalList() {
    try {
      this.examGoalList = [
        {
          title: '소프트웨어 공학 B+ 이상 받는다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D-108',
          goalStatus: 'ACHIEVING',
          isGroupGoal: true,
          habitTrackers: [
            {
              title: '수업 전에 강의록 읽고 예습하기',
              isDone: true,
              repeatDay: [],
            },
            {
              title: '수업 전에 강의록 읽고 예습하기',
              isDone: true,
              repeatDay: [],
            },
          ],
        },
        {
          title: '운전면허시험 합격한다!',
          period: '2022.03.02 ~ 2022.06.21',
          dDay: 'D+108',
          goalStatus: 'ACHIEVING',
          isGroupGoal: false,
          habitTrackers: [
            {
              title: '수업 전에 강의록 읽고 예습하기',
              isDone: true,
              repeatDay: [],
            },
          ],
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
          habitTrackers: [],
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }

  async createExamGoal(goalData: GoalCreatePopupFormDataType) {
    try {
      const rq = this.toCreateGoalRq(goalData);
      const data = await createGoal(rq);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  toCreateGoalRq(vo: GoalCreatePopupFormDataType): CreateGoalRq {
    return {
      goal: {
        examTitle: vo.examTitle,
        scoreType: vo.scoreType,
        score: vo.score,
        startDate: vo.startDate,
        endDate: vo.endDate,
      },
    };
  }
}

import { IExamGoal } from '@vo/goals/IExamGoal';
import { makeObservable, observable } from 'mobx';

import { createGoal, getGoalList } from '../../api/goals/goals';
import { GoalCreatePopupFormDataType } from '../../fragments/goals/popup/GoalCreatePopupFormDataType';
import {
  CreateGoalRq,
  GoalListRq,
  GoalListRs,
} from '../../rqrs/goals/goalsRqrs';
import { stringToWeekdayList } from '../../utils/date';

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
      const rq: GoalListRq = {
        pageNumber: 0,
        pageSize: 10,
      };
      const rs = (await getGoalList(rq)).data;
      this.examGoalList = this.toGoalListVO(rs);
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

  toGoalListVO(rs: GoalListRs): IExamGoal[] {
    return rs.content.map((goalItem) => {
      return {
        goalId: goalItem.goalId,
        title: goalItem.title,
        period: goalItem.period,
        dDay: goalItem.dDay,
        goalStatus: goalItem.goalStatus,
        isGroupGoal: goalItem.isGroupGoal,
        habitTrackers: goalItem.habitTrackers.map((it) => {
          return {
            habitId: it.habitId,
            title: it.title,
            isDone: it.isDone,
            repeatDay: stringToWeekdayList(it.repeatDays),
          };
        }),
      };
    });
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

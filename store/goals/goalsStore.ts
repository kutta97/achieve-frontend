import { IExamGoal } from '@vo/goals/IExamGoal';
import { action, makeObservable, observable } from 'mobx';

import {
  checkHabitTracker,
  createGoal,
  createHabitTracker,
  deleteHabitTracker,
  editGoal,
  getGoalList,
} from '../../api/goals/goals';
import { GoalCreatePopupFormDataType } from '../../fragments/goals/popup/goal/GoalCreatePopupFormDataType';
import { HabitTrackerCreatePopupFormDataType } from '../../fragments/goals/popup/habitTracker/HabitTrackerCreatePopupFormDataType';
import {
  CreateGoalRq,
  CreateHabitTrackerRq,
  EditGoalRq,
  GoalListRq,
  GoalListRs,
} from '../../rqrs/goals/goalsRqrs';
import { stringToWeekdayList } from '../../utils/date';
import { RootStore } from '../index';

export class GoalsStore {
  rootStore: RootStore;
  totalGoalCount = 0;
  examGoalList: IExamGoal[] = [];

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      totalGoalCount: observable,
      examGoalList: observable,
      initExamGoalList: action,
      loadExamGoalList: action,
    });
    this.rootStore = rootStore;
    this.initExamGoalList();
  }

  initExamGoalList() {
    this.getExamGoalList().then((goaList) => {
      this.examGoalList = goaList;
      this.rootStore.sidebarStore.loadSidebar();
      this.rootStore.overviewStore.loadOverview();
    });
  }

  loadExamGoalList(pageNumber: number) {
    this.getExamGoalList(pageNumber).then((goaList) => {
      this.examGoalList = [...this.examGoalList, ...goaList];
    });
  }

  async getExamGoalList(pageNumber = 0, pageSize = 10) {
    try {
      const rq: GoalListRq = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      const rs = (await getGoalList(rq)).data;
      this.totalGoalCount = rs.totalItem;
      return this.toGoalListVO(rs);
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

  async completeGoal(goalId: number, achieved: boolean) {
    try {
      const rq: EditGoalRq = {
        goal: {
          goalStatus: achieved ? 'ACHIEVED' : 'FAILED',
        },
      };
      const data = await editGoal(goalId, rq);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  async editGoal(goalId: number) {
    try {
      //const data = await editGoal(goalId, rq);
      //return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  async createHabitTracker(
    goalId: number,
    habitTrackerData: HabitTrackerCreatePopupFormDataType
  ) {
    try {
      const rq = this.toCreateHabitTrackerRq(habitTrackerData);
      const data = await createHabitTracker(goalId, rq);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  async checkHabitTracker(goalId: number, habitId: number) {
    try {
      const data = await checkHabitTracker(goalId, habitId);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteHabitTracker(goalId: number, habitId: number) {
    try {
      const data = await deleteHabitTracker(goalId, habitId);
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

  toCreateHabitTrackerRq(
    vo: HabitTrackerCreatePopupFormDataType
  ): CreateHabitTrackerRq {
    return {
      habitTracker: {
        title: vo.title,
        repeatDays: vo.repeatDays || 'SUN,MON,TUE,WED,THU,FRI,SAT',
      },
    };
  }
}

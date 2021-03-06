import { action, makeObservable, observable } from "mobx";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";

export class GoalStore {

  tempArr: ExamGoalVO[] = [
    {
      id: 1,
      examName: '소프트웨어공학',
      scoreType: 'LETTER',
      score: 'B+',
      startDate: '2022.3.8',
      dueDate: '2022.6.29',
      dDay: 'D-123',
      states: ['GROUP', 'ACHIEVING...'],
      habitTrackerCount: 0,
      habitTracker: [], 
    },
    {
      id: 2,
      examName: '토익시험',
      scoreType: 'NUMBER',
      score: '850',
      startDate: '2022.3.14',
      dueDate: '2022.7.3',
      dDay: 'D-123',
      states: ['ACHIEVING...'],
      habitTrackerCount: 0,
      habitTracker: [], 
    }
  ]

  examGoals: ExamGoalVO[] = [];

  constructor() {
    makeObservable(this, {
      examGoals: observable,
      getExamGoals: action,
      addExamGoal:action,
    })

    this.getExamGoals();
  }

  async getExamGoals() {
    this.examGoals = this.toVO(null);
  }

  async addExamGoal(exmaGoal: ExamGoalVO) {
    this.examGoals = [exmaGoal, ...this.examGoals];
  }

  toVO(res?: any): ExamGoalVO[] {
    return this.tempArr;
  }
}
export enum ExamGoalStatusTypeEnum {
  ACHIEVING = 'Achieving...',
  ACHIEVED = 'Achieved!',
  FAILED = 'Failed',
}

export type ExamGoalStatusType = keyof typeof ExamGoalStatusTypeEnum;

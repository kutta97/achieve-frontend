export enum ExamGoalScoreTypeEnum {
  NUMBER = 'number grade',
  LETTER = 'letter grade',
  PERCENTAGE = 'percentile grade',
}

export type ExamGoalScoreType = keyof typeof ExamGoalScoreTypeEnum;

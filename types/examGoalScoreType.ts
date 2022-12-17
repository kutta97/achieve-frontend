export enum ExamGoalScoreTypeEnum {
  NUMBER = 'number grade',
  LETTER = 'letter grade',
  PERCENTAGE = 'percentile grade',
}

export enum ExamGoalScoreTypeKey {
  NUMBER = 'NUMBER',
  LETTER = 'LETTER',
  PERCENTAGE = 'PERCENTAGE',
}

export type ExamGoalScoreType = keyof typeof ExamGoalScoreTypeEnum;

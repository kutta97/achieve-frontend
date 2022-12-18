import { ExamGoalScoreType } from '../../../../types/examGoalScoreType';

export type GoalCreatePopupFormDataType = {
  examTitle?: string;
  scoreType?: ExamGoalScoreType;
  score?: string;
  startDate?: string;
  endDate?: string;
};

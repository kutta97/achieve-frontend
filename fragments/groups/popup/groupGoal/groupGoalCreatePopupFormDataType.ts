import { ExamGoalScoreType } from '../../../../types/examGoalScoreType';

export type GroupGoalCreatePopupFormDataType = {
  examTitle?: string;
  scoreType?: ExamGoalScoreType;
  score?: string;
  startDate?: string;
  endDate?: string;
};

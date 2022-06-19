import { habitTracker } from "./habitTracker";

export interface ExamGoalVO {
  id: number,
  examName: string,
  scoreType: ScoreType,
  score: string,
  startDate: string,
  dueDate: string,
  dDay: string,
  habitTrackerCount: number,
  habitTracker: habitTracker[], 
}

export type ScoreType = 'NUMBER' | 'LETTER' | 'PERCENTAGE';
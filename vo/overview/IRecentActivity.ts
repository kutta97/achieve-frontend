export interface IRecentActivity {
  month?: number;
  year?: number;
  createdGoals?: IActivityDetail[];
  achievedGoals?: IActivityDetail[];
  gainedBadges?: IActivityDetail[];
}

export interface IActivityDetail {
  name?: string;
  date?: string;
}

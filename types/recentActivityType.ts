export enum RecentActivityTypeEnum {
  CREATE_GOAL,
  ACHIEVE_GOAL,
  GOT_BADGE,
}

export type RecentActivityType = keyof typeof RecentActivityTypeEnum;

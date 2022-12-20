export interface IGroup {
  groupId?: number;
  title?: string;
  members?: IGroupMember[];
  goals?: IGroupGoal[];
}

export interface IGroupMember {
  id?: number;
  name?: string;
  imgSrc?: string;
}

export interface IGroupGoal {
  title?: string;
  period?: string;
  dDay?: string;
}

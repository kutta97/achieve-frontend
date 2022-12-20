import { IGroup } from '@vo/groups/IGroup';
import { makeObservable, observable } from 'mobx';

import {
  createGroup,
  createGroupGoal,
  getGroupList,
} from '../../api/groups/groups';
import { GroupCreatePopupFormDataType } from '../../fragments/groups/popup/group/groupCreatePopupFormDataType';
import { GroupGoalCreatePopupFormDataType } from '../../fragments/groups/popup/groupGoal/groupGoalCreatePopupFormDataType';
import { CreateGoalRq } from '../../rqrs/goals/goalsRqrs';
import {
  CreateGroupRq,
  GroupListRq,
  GroupListRs,
} from '../../rqrs/groups/groupRqrs';

export class GroupsStore {
  totalGroupCount = 0;
  groupList: IGroup[];

  constructor() {
    makeObservable(this, {
      groupList: observable,
    });
    this.initGroupList();
  }

  initGroupList() {
    this.getGroupList().then((groupList) => {
      this.groupList = groupList;
    });
  }

  loadGroupList(pageNumber: number) {
    this.getGroupList(pageNumber).then((groupList) => {
      this.groupList = [...this.groupList, ...groupList];
    });
  }

  async getGroupList(pageNumber = 0, pageSize = 10) {
    try {
      const rq: GroupListRq = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      const rs = (await getGroupList(rq)).data;
      this.totalGroupCount = rs.totalItem;
      return this.toGroupListVO(rs);
    } catch (e) {
      console.log(e);
    }
  }

  async createGroup(groupData: GroupCreatePopupFormDataType) {
    try {
      const rq = this.toCreateGroupRq(groupData);
      const data = await createGroup(rq);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  async createGroupGoal(
    groupId: number,
    goalData: GroupGoalCreatePopupFormDataType
  ) {
    try {
      const rq = this.toCreateGroupGoalRq(goalData);
      const data = await createGroupGoal(groupId, rq);
      return data.ok;
    } catch (e) {
      console.error(e);
    }
  }

  toGroupListVO(rs: GroupListRs): IGroup[] {
    return rs.content.map((groupItem) => {
      return {
        groupId: groupItem.groupId,
        title: groupItem.name,
        members: groupItem.members.map((it) => {
          return {
            id: it.memberId,
            name: it.name,
            imgSrc: it.imgSrc,
          };
        }),
        goals: groupItem.groupGoals.map((it) => {
          return {
            title: it.title,
            period: it.period,
            dDay: it.dDay,
          };
        }),
      };
    });
  }

  toCreateGroupRq(vo: GroupCreatePopupFormDataType): CreateGroupRq {
    return {
      group: {
        name: vo.name,
        members: vo.members,
      },
    };
  }

  toCreateGroupGoalRq(vo: GroupGoalCreatePopupFormDataType): CreateGoalRq {
    return {
      goal: {
        examTitle: vo.examTitle,
        scoreType: vo.scoreType,
        score: vo.score,
        startDate: vo.startDate,
        endDate: vo.endDate,
      },
    };
  }
}

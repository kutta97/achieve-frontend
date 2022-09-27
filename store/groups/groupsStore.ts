import { IGroup } from '@vo/groups/IGroup';
import { makeObservable, observable } from 'mobx';

export class GroupsStore {
  groupList: IGroup[];

  constructor() {
    makeObservable(this, {
      groupList: observable,
    });
    this.loadGroupList();
  }

  loadGroupList() {
    this.getGroupList().then();
  }

  async getGroupList() {
    try {
      this.groupList = [
        {
          id: 1,
          title: '컴공 3학년 올 A+ 모임',
          members: [
            {
              id: 1,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test4.png',
            },
            {
              id: 2,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test2.png',
            },
            {
              id: 3,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test.png',
            },
            {
              id: 4,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test3.png',
            },
          ],
          goals: [
            {
              title: '소프트웨어 공학 B+ 이상 받는다!',
              period: '2022.03.02 ~ 2022.06.21',
              dDay: 'D-108',
            },
            {
              title: '소프트웨어 공학 B+ 이상 받는다!',
              period: '2022.03.02 ~ 2022.06.21',
              dDay: 'D-108',
            },
          ],
        },
        {
          id: 1,
          title: '컴공 3학년 올 A+ 모임',
          members: [
            {
              id: 1,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test4.png',
            },
            {
              id: 2,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test2.png',
            },
            {
              id: 3,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test.png',
            },
            {
              id: 4,
              name: 'MyFriend',
              imgSrc: '/assets/test/profile_test3.png',
            },
          ],
          goals: [
            {
              title: '소프트웨어 공학 B+ 이상 받는다!',
              period: '2022.03.02 ~ 2022.06.21',
              dDay: 'D-108',
            },
            {
              title: '소프트웨어 공학 B+ 이상 받는다!',
              period: '2022.03.02 ~ 2022.06.21',
              dDay: 'D-108',
            },
          ],
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }
}

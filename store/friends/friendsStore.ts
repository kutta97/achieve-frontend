import { IFriend } from '@vo/friends/IFriend';
import { makeObservable, observable } from 'mobx';

export class FriendsStore {
  friendList: IFriend[];

  constructor() {
    makeObservable(this, {
      friendList: observable,
    });
    this.loadFriendList();
  }

  loadFriendList() {
    this.getFriendList().then();
  }

  async getFriendList() {
    try {
      this.friendList = [
        {
          id: 1,
          name: 'MyFriend1',
          imgSrc: '/assets/test/profile_test1.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
        {
          id: 2,
          name: 'MyFriend2',
          imgSrc: '/assets/test/profile_test2.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
        {
          id: 3,
          name: 'MyFriend3',
          imgSrc: '/assets/test/profile_test3.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
        {
          id: 4,
          name: 'MyFriend4',
          imgSrc: '/assets/test/profile_test.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
        {
          id: 5,
          name: 'MyFriend5',
          imgSrc: '/assets/test/profile_test4.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
        {
          id: 6,
          name: 'MyFriend6',
          imgSrc: '/assets/test/profile_test3.png',
          description:
            'hello world! from seoul\n' + 'I wanna be an awsome student.',
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }
}

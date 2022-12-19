import { IFriend } from '@vo/friends/IFriend';
import { makeObservable, observable } from 'mobx';

import { getFriendList, requestFriend } from '../../api/friends/friends';
import { AddFriendPopupFormDataType } from '../../fragments/friends/popup/addFriend/AddFriendPopupFormDataType';
import {
  FriendListRq,
  FriendListRs,
  FriendRequestRq,
} from '../../rqrs/friends/friendsRqrs';

export class FriendsStore {
  totalFriendCount = 0;
  friendList: IFriend[] = [];

  constructor() {
    makeObservable(this, {
      friendList: observable,
    });
    this.initFriendList();
  }

  initFriendList() {
    this.getFriendList().then((friendList) => {
      this.friendList = friendList;
    });
  }

  loadFriendList(pageNumber: number) {
    this.getFriendList(pageNumber).then((friendList) => {
      this.friendList = [...this.friendList, ...friendList];
    });
  }

  async getFriendList(pageNumber = 0, pageSize = 10) {
    try {
      const rq: FriendListRq = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      const rs = (await getFriendList(rq)).data;
      this.totalFriendCount = rs.totalItem;

      return this.toFriendListVO(rs);
    } catch (e) {
      console.log(e);
    }
  }

  async requestFriend(requestData: AddFriendPopupFormDataType) {
    try {
      const rq: FriendRequestRq = {
        email: requestData.email,
      };
      const data = await requestFriend(rq);
      return data.ok;
    } catch (e) {
      console.log(e);
    }
  }

  toFriendListVO(rs?: FriendListRs): IFriend[] {
    return rs?.content?.map((friend) => ({
      id: friend.friendId,
      name: friend.name,
      imgSrc: friend.imgSrc,
      description: friend.description,
    }));
  }
}

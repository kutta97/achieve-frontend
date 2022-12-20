import { IFriend } from '@vo/friends/IFriend';
import { makeObservable, observable } from 'mobx';

import {
  acceptFriend,
  getFriendList,
  getFriendRequestList,
  requestFriend,
} from '../../api/friends/friends';
import { AddFriendPopupFormDataType } from '../../fragments/friends/popup/addFriend/AddFriendPopupFormDataType';
import {
  AcceptFriendRq,
  FriendListRq,
  FriendListRs,
  FriendRequestListRs,
  FriendRequestRq,
} from '../../rqrs/friends/friendsRqrs';

export class FriendsStore {
  totalFriendCount = 0;
  totalInviteCount = 0;
  friendList: IFriend[] = [];
  pendingInvitationList: IFriend[] = [];

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
    this.getFriendRequestList().then((requestList) => {
      this.pendingInvitationList = requestList;
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

  async getFriendRequestList() {
    try {
      const rs = (await getFriendRequestList()).data;
      this.totalInviteCount = rs.totalItem;

      return this.toFriendRequestListVO(rs);
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

  async acceptFriend(id: number, accept: boolean) {
    try {
      const rq: AcceptFriendRq = {
        accept: accept,
      };
      const data = await acceptFriend(id, rq);
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

  toFriendRequestListVO(rs?: FriendRequestListRs): IFriend[] {
    return rs?.content?.map((friend) => ({
      id: friend.friendId,
      name: friend.name,
      imgSrc: friend.imgSrc,
      description: friend.description,
    }));
  }
}

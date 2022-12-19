import {
  AcceptFriendRq,
  FriendListRq,
  FriendListRs,
  FriendRequestListRs,
  FriendRequestRq,
} from '../../rqrs/friends/friendsRqrs';
import api from '../../utils/api';

export const getFriendList = async (rq: FriendListRq) => {
  return await api.get<FriendListRs>('/friends', rq);
};

export const requestFriend = async (rq: FriendRequestRq) => {
  return await api.post(`/friends/request`, rq);
};

export const getFriendRequestList = async () => {
  return await api.get<FriendRequestListRs>(`/friends/request`);
};

export const acceptFriend = async (id: number, rq: AcceptFriendRq) => {
  return await api.post(`/friends/accept/${id}`, rq);
};

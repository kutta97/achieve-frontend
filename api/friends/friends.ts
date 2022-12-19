import { FriendListRq, FriendListRs } from '../../rqrs/friends/friendsRqrs';
import api from '../../utils/api';

export const getFriendList = async (rq: FriendListRq) => {
  return await api.get<FriendListRs>('/friends', rq);
};

export const requestFriend = async (id: number) => {
  return await api.post(`/friends/request/${id}`);
};

export const getFriendRequestList = async () => {
  return await api.get<FriendListRs>(`/friends/request`);
};

export const acceptFriend = async (rq: FriendListRq) => {
  return await api.post<FriendListRs>('/friends/', rq);
};

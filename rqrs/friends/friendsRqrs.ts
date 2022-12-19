export interface FriendListRq {
  pageNumber?: number;
  pageSize?: number;
}

export interface FriendItem {
  friendId?: number;
  name?: string;
  imgSrc?: string;
  description?: string;
}

export interface FriendListRs {
  content?: FriendItem[];
  pageNumber?: number;
  pageSize?: number;
  totalItem?: number;
}

export interface FriendRequestListRs {
  content?: FriendItem[];
  pageNumber?: number;
  pageSize?: number;
  totalItem?: number;
}

export interface AcceptFriendRq {
  accept?: boolean;
}

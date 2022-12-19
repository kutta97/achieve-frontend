import { useStores } from '@hooks/useStores';
import { IFriend } from '@vo/friends/IFriend';
import { useEffect, useState } from 'react';

export const useFriends = () => {
  const { friendsStore } = useStores();

  const [friendList, setFriendList] = useState<IFriend[]>();

  useEffect(() => {
    friendsStore.friendList && setFriendList(friendsStore.friendList);
  }, [friendsStore.friendList]);

  return { totalFriendCount: friendsStore.totalFriendCount, friendList };
};

import { useStores } from '@hooks/useStores';
import { IFriend } from '@vo/friends/IFriend';
import { useEffect, useState } from 'react';

export const useAcceptFriendPopup = () => {
  const { friendsStore } = useStores();

  const [invitationList, setInvitationList] = useState<IFriend[]>();

  useEffect(() => {
    friendsStore.pendingInvitationList &&
      setInvitationList(friendsStore.pendingInvitationList);
  }, [friendsStore.pendingInvitationList]);

  const onAccept = async (friendId: number, accept: boolean) => {
    return await friendsStore.acceptFriend(friendId, accept);
  };

  const loadFriendList = () => {
    friendsStore.initFriendList();
  };

  return { invitationList, onAccept, loadFriendList };
};

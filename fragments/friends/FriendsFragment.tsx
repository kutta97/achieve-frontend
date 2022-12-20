import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { FriendItem } from '@components/friends/FriendItem';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';

import { useFriends } from './hooks/useFriends';
import { AcceptFriendPopup } from './popup/acceptFriend/AcceptFriendPopup';
import { AddFriendPopup } from './popup/addFriend/AddFriendPopup';

export const FriendsFragment = observer(() => {
  const { totalFriendCount, totalInviteCount, friendList } = useFriends();

  const [isAcceptPopupOpen, setIsAcceptPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const handleAcceptFriendPopupOpen = () => {
    setIsAcceptPopupOpen(true);
  };
  const handleAcceptFriendPopupClose = () => {
    setIsAcceptPopupOpen(false);
  };
  const handleAddFriendPopupOpen = () => {
    setIsAddPopupOpen(true);
  };
  const handleAddFriendPopupClose = () => {
    setIsAddPopupOpen(false);
  };

  return (
    <FriendsFragmentStyled>
      <div className="top">
        <Title text={`You Have ${totalFriendCount} Friends!`} />
        <span>
          <Button
            text={`${totalInviteCount} Pending Invites`}
            onClick={handleAcceptFriendPopupOpen}
            disabled={totalInviteCount === 0}
          />
          <Button text="Add a Friend" onClick={handleAddFriendPopupOpen} />
        </span>
      </div>
      <div className="friends-wrap">
        {friendList?.map((value, index) => (
          <FriendItem data={value} key={index} />
        ))}
      </div>
      <AcceptFriendPopup
        isOpen={isAcceptPopupOpen}
        onClose={handleAcceptFriendPopupClose}
      />
      <AddFriendPopup
        isOpen={isAddPopupOpen}
        onClose={handleAddFriendPopupClose}
      />
    </FriendsFragmentStyled>
  );
});

const FriendsFragmentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      display: flex;
      gap: 5px;
    }
  }

  .friends-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

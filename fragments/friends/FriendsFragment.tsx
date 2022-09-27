import { Title } from '@components/common/text/Title';
import { FriendItem } from '@components/friends/FriendItem';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useFriends } from './hooks/useFriends';

export const FriendsFragment = observer(() => {
  const { friendList } = useFriends();

  return (
    <FriendsFragmentStyled>
      <div className="top">
        <Title text="You Have 17 Friends!" />
      </div>
      <div className="friends-wrap">
        {friendList?.map((value, index) => (
          <FriendItem data={value} key={index} />
        ))}
      </div>
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
  }

  .friends-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

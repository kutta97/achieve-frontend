import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { GroupItem } from '@components/groups/GroupItem';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useGroups } from './hooks/useGroups';

export const GroupsFragment = observer(() => {
  const { groupList } = useGroups();

  return (
    <GroupsFragmentStyled>
      <div className="top">
        <Title text="You Have 2 Groups!" />
        <Button text="Create New Group" />
      </div>
      <div className="groups-wrap">
        {groupList?.map((value, index) => (
          <GroupItem data={value} key={index} />
        ))}
      </div>
    </GroupsFragmentStyled>
  );
});

const GroupsFragmentStyled = styled.div`
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

  .groups-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { GroupItem } from '@components/groups/GroupItem';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';

import { useGroups } from './hooks/useGroups';
import { GroupCreatePopup } from './popup/group/groupCreatePopup';
import { GroupGoalCreatePopup } from './popup/groupGoal/groupGoalCreatePopup';

export const GroupsFragment = observer(() => {
  const { totalGroupCount, groupList } = useGroups();

  const [selectedGroupId, setSelectedGroupId] = useState(0);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isGoalCreatePopupOpen, setIsGoalCreatePopupOpen] = useState(false);

  const handleCreatePopupOpen = () => {
    setIsCreatePopupOpen(true);
  };
  const handleCreatePopupClose = () => {
    setIsCreatePopupOpen(false);
  };
  const handleCreateGoalPopupClose = () => {
    setIsGoalCreatePopupOpen(false);
  };
  const handleMenuClick = (goalId: number) => {
    setSelectedGroupId(goalId);
  };
  const handleSelectMenuItem = (id: string) => {
    if (id === 'GROUP_GOAL') {
      setIsGoalCreatePopupOpen(true);
    }
  };

  return (
    <GroupsFragmentStyled>
      <div className="top">
        <Title text={`You Have ${totalGroupCount} Groups!`} />
        <Button text="Create a New Group" onClick={handleCreatePopupOpen} />
      </div>
      <div className="groups-wrap">
        {groupList?.map((value) => (
          <GroupItem
            data={value}
            key={value.groupId}
            onClickMenu={handleMenuClick}
            onSelectMenu={handleSelectMenuItem}
          />
        ))}
      </div>
      <GroupCreatePopup
        isOpen={isCreatePopupOpen}
        onClose={handleCreatePopupClose}
      />
      <GroupGoalCreatePopup
        groupId={selectedGroupId}
        isOpen={isGoalCreatePopupOpen}
        onClose={handleCreateGoalPopupClose}
      />
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
    margin: -30px -40px 20px -40px;
    padding: 30px 40px 0 40px;
    z-index: 2;
    background: ${({ theme }) => theme.colors.BasicBg};
    border-radius: 20px;
  }

  .groups-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

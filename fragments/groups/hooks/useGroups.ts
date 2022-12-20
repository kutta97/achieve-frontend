import { useStores } from '@hooks/useStores';
import { IGroup } from '@vo/groups/IGroup';
import { useEffect, useState } from 'react';

export const useGroups = () => {
  const { groupsStore } = useStores();

  const [groupList, setGroupList] = useState<IGroup[]>();

  useEffect(() => {
    groupsStore.groupList && setGroupList(groupsStore.groupList);
  }, [groupsStore.groupList]);

  return { totalGroupCount: groupsStore.totalGroupCount, groupList };
};

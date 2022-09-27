import { useStores } from '@hooks/useStores';
import { IBadge } from '@vo/badges/IBadge';
import { useEffect, useState } from 'react';

export const useBadges = () => {
  const { badgesStore } = useStores();

  const [badgeList, setBadgeList] = useState<IBadge[]>();

  useEffect(() => {
    badgesStore.badgeList && setBadgeList(badgesStore.badgeList);
  }, [badgesStore.badgeList]);

  return { badgeList };
};

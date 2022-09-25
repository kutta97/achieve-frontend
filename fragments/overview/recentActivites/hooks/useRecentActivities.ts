import { useStores } from '@hooks/useStores';
import { IRecentActivity } from '@vo/overview/IRecentActivity';
import { useEffect, useState } from 'react';

export const useRecentActivities = () => {
  const { overviewStore } = useStores();

  const [activityList, setActivityList] = useState<IRecentActivity[]>();

  useEffect(() => {
    overviewStore.recentActivityList &&
      setActivityList(overviewStore.recentActivityList);
  }, [overviewStore.recentActivityList]);

  return { activityList };
};

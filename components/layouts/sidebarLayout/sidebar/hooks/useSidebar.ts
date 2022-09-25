import { useStores } from '@hooks/useStores';
import { ISidebarProfile } from '@vo/layouts';
import { useEffect, useState } from 'react';

export const useSidebar = () => {
  const { sidebarStore } = useStores();

  const [profile, setProfile] = useState<ISidebarProfile>();

  useEffect(() => {
    sidebarStore.sidebarProfile && setProfile(sidebarStore.sidebarProfile);
  }, [sidebarStore.sidebarProfile]);

  return { profile };
};

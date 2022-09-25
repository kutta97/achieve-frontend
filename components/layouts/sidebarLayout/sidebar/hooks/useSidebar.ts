import { ISidebarProfile } from '@vo/layouts';
import { useState } from 'react';

export const useSidebar = () => {
  const [profile, setProfile] = useState<ISidebarProfile>();

  return { profile };
};

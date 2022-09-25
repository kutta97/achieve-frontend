import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import { SidebarStore } from './components/layouts/sidebarLayout/sidebarStore';

export class RootStore {
  sidebarStore: SidebarStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
  }
}

export const useStores = () => useContext(MobXProviderContext);

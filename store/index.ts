import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import { SidebarStore } from './components/layouts/sidebarLayout/sidebarStore';
import { OverviewStore } from './overview/overviewStore';

export class RootStore {
  sidebarStore: SidebarStore;
  overviewStore: OverviewStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
    this.overviewStore = new OverviewStore();
  }
}

export const useStores = () => useContext(MobXProviderContext);

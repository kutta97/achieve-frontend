import { SidebarStore } from './components/layouts/sidebarLayout/sidebarStore';
import { GoalsStore } from './goals/goalsStore';
import { OverviewStore } from './overview/overviewStore';

export class RootStore {
  sidebarStore: SidebarStore;
  overviewStore: OverviewStore;
  goalsStore: GoalsStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
    this.overviewStore = new OverviewStore();
    this.goalsStore = new GoalsStore();
  }
}

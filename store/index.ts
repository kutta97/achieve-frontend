import { BadgesStore } from './badges/badgesStore';
import { SidebarStore } from './components/layouts/sidebarLayout/sidebarStore';
import { FriendsStore } from './friends/friendsStore';
import { GoalsStore } from './goals/goalsStore';
import { GroupsStore } from './groups/groupsStore';
import { OverviewStore } from './overview/overviewStore';

export class RootStore {
  sidebarStore: SidebarStore;
  overviewStore: OverviewStore;
  goalsStore: GoalsStore;
  badgesStore: BadgesStore;
  friendsStore: FriendsStore;
  groupsStore: GroupsStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
    this.overviewStore = new OverviewStore();
    this.goalsStore = new GoalsStore();
    this.badgesStore = new BadgesStore();
    this.friendsStore = new FriendsStore();
    this.groupsStore = new GroupsStore();
  }
}

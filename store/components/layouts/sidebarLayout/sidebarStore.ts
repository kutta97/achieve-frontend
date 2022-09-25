import { ISidebarProfile } from '@vo/layouts';
import { action, makeObservable, observable } from 'mobx';

export class SidebarStore {
  sidebarProfile: ISidebarProfile = {
    name: 'test',
    description: 'test',
  };

  constructor() {
    makeObservable(this, {
      sidebarProfile: observable,
      loadSidebar: action,
    });

    this.loadSidebar();
  }

  loadSidebar() {
    this.getSidebar().then(() =>
      console.log('sidebarProfile', this.sidebarProfile)
    );
  }

  async getSidebar() {
    try {
      this.sidebarProfile = {
        name: 'nickname',
        description:
          'hello world! from seoul\n' + 'I wanna be an awsome student.',
        goalCount: 2,
        goalList: [],
        badgeCount: 3,
        badgeList: [],
      };
    } catch (e) {
      console.log(e);
    }
  }
}
